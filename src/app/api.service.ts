import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states = [
    {
      "id": 1,
      "name": "Andhra Pradesh",
      "image": "https://static.toiimg.com/photo/110635159.cms",
      "description": "Known for its rich cultural heritage, historic temples, and beautiful coastline along the Bay of Bengal."
    },
    {
      "id": 2,
      "name": "Arunachal Pradesh",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/giant-budhha-statue-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1726743111236",
      "description": "A northeastern state known for its pristine natural beauty, snow-capped mountains, and vibrant tribal culture."
    },
    {
      "id": 3,
      "name": "Assam",
      "image": "https://imgcld.yatra.com/ytimages/image/upload/v1517482087/AdvNation/ANN_DES71/ann_top_Assam_c49hzx.jpg",
      "description": "Famous for its tea gardens, the Brahmaputra River, and the Kaziranga National Park, home to the one-horned rhinoceros."
    },
    {
      "id": 4,
      "name": "Bihar",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/jagjivan-ram-smriti-sangrahalaya-arrah-bihar-1-attr-hero?qlt=82&ts=1726740579028",
      "description": "Home to ancient historical sites such as Nalanda and Bodh Gaya, Bihar has a rich cultural and spiritual heritage."
    },
    {
      "id": 5,
      "name": "Chhattisgarh",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/chitrakote-water-falls-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011277081",
      "description": "Known for its dense forests, waterfalls, and unique tribal culture."
    },
    {
      "id": 6,
      "name": "Goa",
      "image": "https://www.india.com/wp-content/uploads/2024/06/Calangute-Beach-1.jpg",
      "description": "Famous for its beaches, Portuguese heritage, and vibrant nightlife."
    },
    {
      "id": 7,
      "name": "Gujarat",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-pavagadh-temple-gujarat-state-hero2?qlt=82&ts=1726733709050",
      "description": "Known for its historical sites, vibrant festivals, and the Gir National Park, home to Asiatic lions."
    },
    {
      "id": 8,
      "name": "Haryana",
      "image": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Cyber_City_View.jpg",
      "description": "A leading agricultural state with a rich history and proximity to the national capital, Delhi."
    },
    {
      "id": 9,
      "name": "Himachal Pradesh",
      "image": "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Himachal-Pradesh-in-March-1.webp?fit=1920%2C1080&ssl=1",
      "description": "A northern state renowned for its scenic beauty, hill stations, and adventure tourism."
    },
    {
      "id": 10,
      "name": "Jharkhand",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/jayda-mandir-jamshedpur-jharkhand-1-attr-hero?qlt=82&ts=1726724064209",
      "description": "Rich in mineral resources, waterfalls, and a unique tribal culture."
    },
    {
      "id": 11,
      "name": "Karnataka",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/spirituality-murudeshwar-temple-gokarna1?qlt=82&ts=1726720935970",
      "description": "Known for its IT industry, historical monuments, and diverse landscapes."
    },
    {
      "id": 12,
      "name": "Kerala",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nRwwajw-OQXSCcraP1eEM9JYEg_CrjniiQ&s",
      "description": "Popularly known as 'God's Own Country,' Kerala is famous for its backwaters, lush greenery, and cultural traditions."
    },
    {
      "id": 13,
      "name": "Madhya Pradesh",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/chaturbhuj-temple-orchha-madhya-pradesh-2-attr-hero?qlt=82&ts=1726670981334",
      "description": "Known as the 'Heart of India,' it is famous for its wildlife reserves, ancient temples, and forts."
    },
    {
      "id": 14,
      "name": "Maharashtra",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-pratapgarh-fort-mahabaleshwar-maharashtra-2-city-hero?qlt=82&ts=1726668937680",
      "description": "A leading industrial state with iconic landmarks like Mumbai, the Ajanta-Ellora caves, and hill stations."
    },
    {
      "id": 15,
      "name": "Manipur",
      "image": "https://c.ndtvimg.com/2022-02/or0q48l8_imphal-manipur_625x300_02_February_22.jpg?downsize=650:400",
      "description": "A northeastern state known for its natural beauty, rich culture, and traditions like Manipuri dance."
    },
    {
      "id": 16,
      "name": "Meghalaya",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6__GizQAyV12VEEZSDSWk7qnZBDqiXQ0yQ&s",
      "description": "Known as the 'Abode of Clouds,' it is famous for its lush green landscapes and living root bridges."
    },
    {
      "id": 17,
      "name": "Mizoram",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtZCxfyzQXtPWUadxx6MJaxuo8qvOtkQVDw&s",
      "description": "A picturesque state known for its rolling hills, pleasant climate, and vibrant culture."
    },
    {
      "id": 18,
      "name": "Nagaland",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6oPlqJQrCmbiIHQiPEdhJzzgMPBbEGnyrg&s",
      "description": "Famous for its tribal culture, festivals like Hornbill, and scenic landscapes."
    },
    {
      "id": 19,
      "name": "Odisha",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1200px-Konarka_Temple.jpg",
      "description": "Known for its ancient temples, beaches, and the famous Rath Yatra in Puri."
    },
    {
      "id": 20,
      "name": "Punjab",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Golden_Temple%2C_Amritsar%2C_Punjab_UNAG.jpg/1200px-Golden_Temple%2C_Amritsar%2C_Punjab_UNAG.jpg",
      "description": "Renowned for its vibrant culture, delicious cuisine, and the Golden Temple in Amritsar."
    },
    {
      "id": 21,
      "name": "Rajasthan",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
      "description": "Known for its desert landscapes, historic palaces, and vibrant traditions."
    },
    {
      "id": 22,
      "name": "Sikkim",
      "image": "https://ignitetravelsolution.com/wp-content/uploads/2024/06/Best-Tour-Packages-to-Sikkim.jpg",
      "description": "A small northeastern state known for its stunning landscapes and Buddhist monasteries."
    },
    {
      "id": 23,
      "name": "Tamil Nadu",
      "image": "https://cdn.britannica.com/12/100812-050-27483D5E/Mamallapuram-Shore-Temple-Chennai-India-Tamil-Nadu.jpg",
      "description": "Famous for its ancient temples, classical music and dance, and rich cultural heritage."
    },
    {
      "id": 24,
      "name": "Telangana",
      "image": "https://www.holidify.com/images/bgImages/TELANGANA.jpg",
      "description": "Known for its historical monuments, IT industry, and vibrant culture."
    },
    {
      "id": 25,
      "name": "Tripura",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLm3u7FX-EH_9S-Iv4vREgvdI65SlHSZo5NA&s",
      "description": "A small northeastern state with a rich tribal culture and ancient temples."
    },
    {
      "id": 26,
      "name": "Uttar Pradesh",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-taj-mahal-agra-uttar-pradesh-state-hero?qlt=82&ts=1726650592794",
      "description": "Home to iconic landmarks like the Taj Mahal, Varanasi, and the Ganges River."
    },
    {
      "id": 27,
      "name": "Uttarakhand",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Auli%2C_India.jpg/1200px-Auli%2C_India.jpg",
      "description": "Known for its Himalayan beauty, pilgrimage sites, and adventure tourism."
    },
    {
      "id": 28,
      "name": "West Bengal",
      "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-howrah-bridge-kolkata-west-bengal-city-hero?qlt=82&ts=1726642884073",
      "description": "Famous for its cultural heritage, literature, and the Sundarbans mangrove forest."
    }
  ]


  constructor() { }

getStates(){
  return this.states;
}

getStateByID(id:any){
  return this.states.find(state => state.id == id);
}


}