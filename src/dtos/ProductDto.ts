export interface ProductDto {
     navigation : {
         tags : string,
         minPoints :  string,
         maxPoints :  string
    },
     products : {
         _pageSize :  number,
         _page :  number,
         _total :  number,
         items : [
            {
                 sku :   number ,
                 shortName :  string,
                 name : string,
                 originalPoints: number,
                 points : number,
                 discountRate : number,
                 image :  string ,
                 cashEnabled : boolean,
                 description :  string,
                 category : [
                    {
                         id :  number ,
                         name :  string ,
                         icon :  string,
                         visible : boolean,
                         subCategories : []
                    },
                    {
                         id :  number ,
                         name :  string ,
                         icon :  string,
                         visible : false,
                         subCategories : []
                    },
                    {
                         id :  number ,
                         name :  string,
                         icon :  string,
                         visible : boolean,
                         subCategories : []
                    }
                ],
                 produtoEtiqueta :  string,
                 group :  string,
                 supplier :  string,
                 price : number,
                 deliveryProcessCode : number
            }
        ]
    }
}