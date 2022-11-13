import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { scale, verticalScale } from "../../../../../shared/styles/scaling_units";
import { Ionicons } from '@expo/vector-icons';
import { ItemReviewStars } from "./itemReviewStars";
import { ItemReview } from "./itemReview";
import { getReviewsWithBarCode } from "../../../services/product.service";
import { ShowAlert } from "../../../../../shared/pages/showAlert";
import { Review } from "../../../types/responseInterfaces";
import eventsInstance from "../../../../../shared/services/analytics";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const clampGrade = grade => clamp(grade, 1, 5);

function getGradeMean(reviews) {
  let sum = 0;
  reviews.forEach(review => sum += review.grade);
  return clampGrade(Math.round(sum/reviews.length));
}

export function ItemCommunityPreview( { barCode } ) {
  let [isLoading, setIsLoading] = useState(true);
  let [reviews, setReviews] = useState<Review[]>([]);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      setIsLoading(true);
      try {
        setReviews(await getReviewsWithBarCode(barCode));
      } catch (e) {
        console.log(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [setReviews]);

  function getContent() {
    if(isLoading) 
      return <ActivityIndicator size="large"/>;
    if(isError || !reviews)
      ShowAlert("Não foi possível carregar as avaliações dos usuários");
    else return (
      <View style={styles.container}>  
        <Text style={styles.title} onPress={eventsInstance.sendEvent("Tocou no título 'Comunidade'")}>Comunidade</Text>
        <ItemReviewStars size={1} numStars={getGradeMean(reviews)}/>
        <View style={styles.itemReviewsContainer}>
          {reviews.map((review) => 
            <View key={review.idReview} style={styles.itemReviewContainer}>
              <ItemReview review={review}/>
            </View>
            )}
        </View>
      </View>
    );
  }

  return getContent();
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(15),
  },
  itemReviewsContainer: {
    marginTop: verticalScale(20),
  },
  itemReviewContainer: {
    marginBottom: verticalScale(3),
  }
});
  