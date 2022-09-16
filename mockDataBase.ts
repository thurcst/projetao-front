const mockDataBase = [
    {
        productCategory: 'Pães',
        urlImage: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Breads_%281%29.jpg',
        data: [
            {
                barCode: '1',
                productName: 'Pão Francês',
                price: 10.00,
                safetyCategory: 'Produto sem glúten',
                
            },
            {
                barCode: '2',
                productName: 'Pão de Forma',
                price: 15.00,
                safetyCategory: 'Produto com glúten',
            },
        ]
    },
    {
        productCategory: 'Grãos',
        urlImage: 'https://www.damagrinha.com.br/imgs/q-1240-698-90/conteudo/site_posts/30/graos.jpg',
        data: [
            {
                barCode: '3',
                productName: 'Feijão',
                price: 20.00,
                safetyCategory: 'Produto sem glúten',
            },
            {
                barCode: '4',
                productName: 'Soja',
                price: 25.00,
                safetyCategory: 'Produto com glúten',
            },
        ]
    },
    {
        productCategory: 'Doces',
        urlImage: 'https://static4.depositphotos.com/1007566/339/i/600/depositphotos_3391287-stock-photo-color-cereal.jpg',
        data: [
            {
                barCode: '5',
                productName: 'Fini',
                price: 5.00,
                safetyCategory: 'Produto sem glúten',
            },
            {
                barCode: '6',
                productName: 'Mentos',
                price: 5.00,
                safetyCategory: 'Produto com glúten',
            },
        ]
    },
    {
        productCategory: 'Biscoitos e Salgadinhos',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_twYdE5A2gJc0K_u1OudP_XiSm2ncXG67VZJ5efOWf5JxTRkNfF-RBqzR-jdtrRK65s&usqp=CAU',
        data: [
            {
                barCode: '7',
                productName: 'Maizena',
                price: 8.00,
                safetyCategory: 'Produto sem glúten',
            },
            {
                barCode: '8',
                productName: 'Biscoito de Polvilho',
                price: 8.00,
                safetyCategory: 'Produto com glúten',
            },
        ]
    },
    {
        productCategory: 'Carnes, Aves e Peixes',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_za928HzM8LMvp3kHmqJajO4x8BZXYoOQcMsuTrKZzfF7xRjkogP_HOefS1HZVB8wgr0&usqp=CAU',
        data: [
            {
                barCode: '9',
                productName: 'Carne',
                price: 30.00,
                safetyCategory: 'Produto sem glúten',
            },
            {
                barCode: '10',
                productName: 'Peixe',
                price: 30.00,
                safetyCategory: 'Produto com glúten',
            },
        ]
    },
    {
        productCategory: 'Molhos e Condimentos',
        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSooVqDk0583fx_KCUWSzMsMZXwJfNZW_KPw4ysOTL9XkiaGipBTQt8VdkHtkY4UGDWx0&usqp=CAU',
        data: [
            {
                barCode: '11',
                productName: 'Molho de Tomate',
                price: 10.00,
                safetyCategory: 'Produto sem glúten',
            },
            {
                barCode: '12',
                productName: 'Molho de Pimenta',
                price: 10.00,
                safetyCategory: 'Produto com glúten',
            },
        ]
    }
];

export default mockDataBase;