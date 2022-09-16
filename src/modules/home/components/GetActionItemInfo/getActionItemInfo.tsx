const Item1 = ['Macarrão de Arroz Penne sem Glúten Urbano 500g']
const Item2 = ['Massa para Pizza Sem Glúten Casa Rigani 175g']
const Item3 = ['Pão Tradicional sem Glúten e sem Lactose Wickbold 300g']
const Item4 = ['Bisc. De Amendoim Com sAçúcar Mascavo - Sem Lactose/Gluten']
const Item5 = ['Muffin Laranja com Gotas de Chocolate Zero Açúcar sem Glúten sem Lactose Belive 40g']
const Item6 = ['Massa Pronta para Tapioca Sem Glúten Natural Life 400g']  
const Item7 = ['Arroz Branco Tipo 1 Longo Fino Sem Glúten Vegano Camil 1Kg']

export function GetActionItemInfo( props ) {
    switch (props) {
        case 'Item1':
            return (Item1);
        case 'Item2':
            return (Item2);
        case 'Item3':
            return (Item3);
        case 'Item4':
            return (Item4);
        case 'Item5':
            return (Item5);
        case 'Item6':
            return (Item6);
        case 'Item7':
            return (Item7);
    }
}