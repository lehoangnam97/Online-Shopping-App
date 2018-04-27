import {PixelRatio} from 'react-native'

function compareAmount(priceRange1, priceRange2) {
    return priceRange1.minAmount - priceRange2.minAmount;
}

export function calculatePrice(amount, priceRanges) {
    priceRanges.sort(compareAmount)

    currentPercentage = 1

    priceRanges.forEach((priceRange) => {
        if (amount >= priceRange.minAmount) {
            currentPercentage = priceRange.percentage
        }
    })

    return currentPercentage
}


export const currentUser = {
    photoURL: 'http://ww4.hdnux.com/photos/62/36/53/13232855/5/920x920.jpg'
};

export const comments = [
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsySgWuPBgcVdShGExSQD9flJvzWFRx6lKmU6xsi4fuJJ59XoHCA',
        name: 'Le Hoang Nam',
        comment: 'sản phẩm tuyệt vời'
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LfOxn9QE02GrJkAakDPtLPWZ2M8bf4Jsh6YiEHEhOgt-c7CkTg',
        name: 'Le Phuong Khanh',
        comment: 'sản phẩm như cứt'
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREaXHVLs2Qp8Ahbokb1zk8SNB9QwxFUzFgF-8RkfZAXLiQiKe',
        name: 'hokage',
        comment: 'chidori'
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREaXHVLs2Qp8Ahbokb1zk8SNB9QwxFUzFgF-8RkfZAXLiQiKe',
        name: 'Ai đó',
        comment: 'chidori'
    },
    {
        avatar: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/4/1/41f229e867c3787ed1ddee90a4bd2bbb_1506073807.jpg',
        name: 'Bùi Anh Tuấn',
        comment: 'Bùi Anh Tuấn sinh ra và lớn lên tại Hà Nội, anh có khuôn mặt lãng tử và một giọng hát cao, thanh. Gia đình:\n Tuấn là anh cả trong gia đình, sống cùng với ông bà bố mẹ. Gia đình bên nội của Tuấn không theo ngành nghệ thuật nhưng rất nhiều người có giọng...'
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREaXHVLs2Qp8Ahbokb1zk8SNB9QwxFUzFgF-8RkfZAXLiQiKe',
        name: 'Ai đó',
        comment: 'Có con đường nào bước qua, \n' +
        'Ta đến mang em món quà , \n' +
        'Hẹn hò yêu thương, ta say đến già , \n' +
        'Nắng mưa là chuyện nắng mưa , \n' +
        'Ai biết con tim đã vừa chạm đến hạnh phúc hay là chưa. '
    }
];


export const FONT_SIZE = 55 / Math.pow(2, PixelRatio.get() - 1);
export const carts = [
    {
        product: {
            id: "SP01",
            colors: [
                {
                    "name": "white",
                    "imageUri": "data:image/jpeg;base64,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"
                },
                {
                    "name": "black",
                    "imageUri": "data:image/jpeg;base64,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"
                }
            ]
            ,
            name: "quần ngắn nam 3",
            discount: 10,
            price: 150000,
        },
        amount: 1
    },
    {
        product: {
            id: "SP01",
            colors: [
                {
                    "name": "blue",
                    "imageUri": "https://target.scene7.com/is/image/Target/14740451?wid=325&hei=325&qlt=80&fmt=pjpeg"
                },
                {
                    "name": "red",
                    "imageUri": "http://7bridgeswalkshop.com.au/wp-content/uploads/2016/08/MENS-RED-BACK.jpeg"
                }
            ],
            name: "áo thun nam 1",
            price: 200000,
            discount: 0,
        },
        amount: 3
    }

];


export const categories = [
    {
        name: "quần",
        image: "https://previews.123rf.com/images/piterk/piterk1701/piterk170100206/70201347-joggers-trousers-or-pants-symbol-simple-flat-icon-on-background-Stock-Photo.jpg",
        products: [
            {
                id: "MS0000",
                name: "QUẦN NGẮN NAM 003",
                listedPrice:39000,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                colors: [
                    {
                        name: "trắng",
                        imageUri: "data:image/jpeg;base64,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",
                        size: ['X', 'XXL', 'XXX'],
                    },
                    {
                        name: "đen",
                        imageUri: "data:image/jpeg;base64,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",
                        size: ['X', 'XXL', 'XXX'],
                    }
                ],
                description: "Sự phá cách là điều thường thấy trong thế giới thời trang, tuy nhiên không phải bất kỳ sáng tạo mới lạ nào cũng được chấp nhận. Chiếc quần jeans rách xuất hiện trong Tuần lễ Thời trang Amazon tại Tokyo (Nhật Bản) mới đây là một minh chứng.  "
            },

            {
                id: "MS0000",
                name: "QUẦN DÀI NAM 005",
                listedPrice:20500,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                colors: [
                    {
                        name: "đen",
                        imageUri: "http://thoitrangkt.com/image/cache/data/Qu%E1%BA%A7n%20Nam/MSQ02-%C4%90EN%20(2)-800x1000.jpg",
                        size: ['X', 'XXL', 'XXX']
                    },
                    {
                        name: "xanh lá",
                        imageUri: "https://image.robins.vn/BppIXdKb7LO-6cTHbv_S9G7bodQ=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static-catalog.robins.vn/p/urban-n-t-7992-491317-1.jpg",
                        size: ['X', 'XXL']
                    }
                ],
                description: "quần dài dành cho nam mặc rất sành điệu "
            },

            {
                id: "MS0000",
                name: "QUẦN DÀI NAM 0125",
                listedPrice:35000,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                colors: [
                    {
                        name: "cam",
                        imageUri: "data:image/jpeg;base64,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",
                        size: ['X', 'XXL', 'XXX']
                    },
                    {
                        name: "xanh lá",
                        imageUri: "https://image.robins.vn/BppIXdKb7LO-6cTHbv_S9G7bodQ=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static-catalog.robins.vn/p/urban-n-t-7992-491317-1.jpg",
                        size: ['X', 'XXL']
                    }
                ],
                description: "quần dài dành cho nam mặc rất sành điệu "
            },
            {
                id: "MS0000",
                name: "QUẦN DÀI NAM 025",
                listedPrice:30000,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                colors: [
                    {
                        name: "xanh lam",
                        imageUri: "data:image/jpeg;base64,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",
                        size: ['X', 'XXL', 'XXX']
                    },
                    {
                        name: "xanh lá",
                        imageUri: "https://image.robins.vn/BppIXdKb7LO-6cTHbv_S9G7bodQ=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static-catalog.robins.vn/p/urban-n-t-7992-491317-1.jpg",
                        size: ['X', 'XXL']
                    }
                ],
                description: "quần dài dành cho nam mặc rất sành điệu "
            },
            {
                id: "MS0000",
                name: "QUẦN DÀI NAM 205",
                listedPrice:30000,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                colors: [
                    {
                        name: "da người",
                        imageUri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUVB7QvyFoNSYWZT4kz3r1fyINbnhfunlmId7sdur-ROnmwwE",
                        size: ['X', 'XXL', 'XXX']
                    },
                    {
                        name: "xanh lá",
                        imageUri: "https://image.robins.vn/BppIXdKb7LO-6cTHbv_S9G7bodQ=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static-catalog.robins.vn/p/urban-n-t-7992-491317-1.jpg",
                        size: ['X', 'XXL']
                    }
                ],
                description: "quần dài dành cho nam mặc rất sành điệu "
            }


        ]
    },


    {
        name: "áo",
        image: "https://image.freepik.com/free-icon/t-shirt-outline_318-32135.jpg",
        products: [
            {
                id: "MS0002",
                name: "áo thun nam 1",
                listedPrice:30000,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                size: ['L', 'XL'],
                colors: [
                    {
                        name: "blue",
                        imageUri: "https://target.scene7.com/is/image/Target/14740451?wid=325&hei=325&qlt=80&fmt=pjpeg",
                        size: ['L', 'XL'],
                    },
                    {
                        name: "red",
                        imageUri: "http://7bridgeswalkshop.com.au/wp-content/uploads/2016/08/MENS-RED-BACK.jpeg",
                        size: ['L', 'XL'],
                    }
                ],
                description: 'áo thun mặc vào rất là thông thoáng'
            },

            {
                id: "MS0002",
                name: "áo thun nữ 2",
                listedPrice:30000,
                price: [{min: 20, discount: 0.8}, {min: 30, discount: 0.75}, {min: 40, discount: 0.5}],
                colors: [
                    {
                        name: "blue",
                        imageUri: "data:image/jpeg;base64,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",
                        size: ['L', 'XL'],
                    },
                    {
                        name: "red",
                        imageUri: "http://www.cruisecontrolgear.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/regal_red_cap_sleeve_performance_tee_-_no_logo_regular_size.jpg",
                        size: ["L", "M"],
                    }
                ],
                description: 'áo thun nữ mặc vào rất là kín đáo '
            }
        ]
    }
];
