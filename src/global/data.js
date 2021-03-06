export const filterData = [{
        name: "Fire",
        image: require('../../assets/fire.png'),
        id: "0"
    },
    // {name:"Accident",image:require("../../assets/accident.jpg"),id:"1"},
    {
        name: "Image",
        image: require("../../assets/addImage.png"),
        id: "2"
    },
    // {name:"Reserve",image:require("../../assets/reserve.png"),id:"3"}
];

// rideData = userData
export const rideData = [
  {
    street: "65 Tran Tan Moi",
    area: "Hoa Cuong Bac, Hai chau, Da Nang",
    id: "0",
  },
  {
    street: "114 Nguyen Hoang",
    area: "Phuong Thac Giang, Hai Chau, Da Nang",
    id: "1",
  },
  {
    street: "Thon Phuoc Loc 1",
    area: "Xa Ea Phe, Huyen Krong Pac, Tinh Dak Lak",
    id: "2",
  },
];

// carTypeData = stationTypeData
// export const stationTypeData =[
//     {title:"Nearest",
//      data:[
//     {name:"Fire Station",image: require('../../assets/fireStation.png'),note:"24/7",promotion:5 ,time:"20:19",id:"0"},
//     // {name:"UberX",group :3, price:5.5,image: require('../../assets/uberX.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
//     // {name:"Connect", group:0, price:12.6,image: require('../../assets/uberConnect.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
//      ]
//     },


//     {title:"Around",
//      data:[
//         {name:"Fire Station",image: require('../../assets/FireStation.png'),note:"24/7",promotion:5 ,time:"20:19",id:"0"},
//     // {name:"UberX",group :3, price:5.5,image: require('../../assets/uberX.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
//     // {name:"Connect", group:0, price:12.6,image: require('../../assets/uberConnect.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
//      ]
//     },
// ];

//     {title:"Premium",
//     data:[
//    {name:"Black",group :3, price:17.4,image: require('../../assets/uberBlack.png'),note:"Premium trips in luxury cars",promotion:0,time:"20:31",id:"3"},
//    {name:"Van", group:6, price:22.3,image: require('../../assets/uberVan.png'),note:"Rides for groups up to 6",promotion:12,time:"20:31", id:"4"},
//     ]
//    },

//    {title:"More",
//    data:[
//   {name:"Assist",group :3, price:35.3,image: require('../../assets/uberAssist.png'),note:"Special assistance from certified drivers",promotion:26,time:"20:25",id:"5"},
//    ]
//   },

// ];

export const requestData = [{
        name: "For Me",
        id: 0
    },
    {
        name: "For Someone",
        id: 1
    }

]

// rideOptions = user
export const user = [{
        name: "Personal",
        icon: "account",
        id: "0"
    },
    {
        name: "Supervisor",
        icon: "supervisor",
        id: "1"
    },
];
export const userLocation = [
    // S??? 2 D????ng ????nh Ngh???, C???u Gi???y, H?? N???i.
    // ??i???n tho???i: 0243.2272134
    // 0243.2191881    
    {
        latitude: 12.742770,
        longitude: 108.371650
    },
]
// export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
//                                 {image:require('../../assets/cashIcon.png'),text:"Cash"}]

// export const availableServices = ["Uber Go","UberX","Uber connect","Uber Black","Uber Van","Uber Assist"]

// carsAround = stationAround
export const stationAround = [
    // S??? 2 D????ng ????nh Ngh???, C???u Gi???y, H?? N???i.
    // ??i???n tho???i: 0243.2272134
    // 0243.2191881    
    {
        latitude: 21.021350,
        longitude: 105.787220
    },
    // 258 Tr???n H??ng ?????o, ph?????ng Nguy???n C?? Trinh, qu???n 1, TP.HCM
    // ??i???n tho???i: 0283.9200996
    // 0283.8385312
    {
        latitude: 10.760270,
        longitude: 106.688200
    },
    // 280 L???ch Tray, ph?????ng ?????ng Qu???c B??nh, qu???n Ng?? Quy???n, H???i Ph??ng
    // ??i???n tho???i: 0225.3735.344
    // 0225. 3735.111
    {
        latitude: 20.839810,
        longitude: 106.694280
    },
    // 183 Phan ????ng L??u,  ph?????ng Khu?? Trung, qu???n C???m L???, TP. ???? N???ng
    // ??i???n tho???i: 02363. 879.688 
    // 02363.879.666
    {
        latitude: 16.005620,
        longitude: 108.221460
    },
    // 67B H??ng V????ng, ph?????ng Th???i B??nh, qu???n Ninh Ki???u, C???n Th??
    // ??i???n tho???i: 02923.779.853
    // 02923.820.170
    {
        latitude: 10.042590,
        longitude: 105.778419
    },
    // S??? 46 ???????ng 30/4, ph?????ng 9, th??nh ph??? V??ng T??u, B?? R???a - V??ng T??u
    // ??i???n tho???i: 0254.3810.756
    // 02923.779.868
    {
        latitude: 10.364700,
        longitude: 107.084050
    },
    // Km s??? 2, Tr???n ????ng ?????o, P.?????i Ph??c, Tp. B???c Ninh, B???c Ninh
    // ??i???n tho???i: 02223.821.832
    {
        latitude: 21.179330,
        longitude: 106.069220
    },
    // S??? 664, ph?????ng Hi???p Th??nh, th??? x?? Th??? D???u M???t, B??nh D????ng
    // ??i???n tho???i: 06935.09937
    // 0693.509.968
    {
        latitude: 11.001400,
        longitude: 106.667300
    },
    // 65 H?? Huy T???p, ph?????ng Tr???n Ph??, th??nh ph??? Quy Nh??n, B??nh ?????nh
    // ??i???n tho???i: 0694349280
    // 06943.49669
    {
        latitude: 13.768780,
        longitude: 109.223750
    },
    // Ph?????ng Tr???ng D??i, th??nh ph??? Bi??n H??a, t???nh ?????ng Nai
    // ??i???n tho???i: 02513.899.909
    // 02513.897.799
    {
        latitude: 10.992040,
        longitude: 106.861720
    },
    // S??? 6 Nguy???n C??ng Tr???, th??nh ph??? Bu??n Ma Thu???t, t???nh ?????c L???c
    // ??i???n tho???i: 069.4389.228
    // 06943.87726
    {
        latitude: 12.676930,
        longitude: 108.050430
    },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },

    // {latitude: ,longitude: },
]