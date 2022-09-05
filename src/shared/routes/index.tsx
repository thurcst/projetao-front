import { NavigationContainer } from "@react-navigation/native";
import { TabBar } from "../components/TabBar/tabBar";

export function AppRoutes(){
    return (
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    );
}