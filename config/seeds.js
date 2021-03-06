const mongoose = require('mongoose');
const db = require('./keys').mongoURI;
const Category = require('../models/Category');
const User = require('../models/User');
const Business = require('../models/Business');
const Review = require('../models/Review');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Seeded successfully"))
  .catch(err => console.log(err));

// new Category({ title: "Restaurants" }).save();
// new Category({ title: "Shopping" }).save();
// new Category({ title: "Nightlife" }).save();
// new Category({ title: "Active Life" }).save();
// new Category({ title: "Beauty & Spas" }).save();
// new Category({ title: "Automotive" }).save();
// new Category({ title: "Home Services" }).save();

// const the_test_hours = {
//   mon: "11:30 am - 10:00 pm",
//   tue: "11:30 am - 10:00 pm",
//   wed: "11:30 am - 10:00 pm",
//   thurs: "11:30 am - 10:00 pm",
//   fri: "11:30 am - 10:00 pm",
//   sat: "11:30 am - 10:00 pm",
//   sun: "5:00 pm - 10:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa761",
//   name: "Test Restaurant 3",
//   owner: "5e449188acf32d81822aa760",
//   address: "1230 Mission",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94133",
//   hours: the_test_hours,
//   latitude: 37.74565743,
//   longitude: -122.434392219,
//   phone: "(415)932-8312",
//   price_range: '$'
// }).save().then(savedBusiness => {
//   new Review({
//     business: savedBusiness._id,
//     author: '5e41c3e92ca0397438730ce1',
//     body: 'Good food! Will come again',
//     username: 'username2'
//   }).save().then(review => {
//     console.log(review)
//   })
// })

// restaurants 
// const the_house_hours = {
//   mon: "11:30 am - 10:00 pm",
//   tue: "11:30 am - 10:00 pm",
//   wed: "11:30 am - 10:00 pm",
//   thurs: "11:30 am - 10:00 pm",
//   fri: "11:30 am - 10:00 pm",
//   sat: "11:30 am - 10:00 pm",
//   sun: "5:00 pm - 10:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa761",
//   name: "The House",
//   owner: "5e449188acf32d81822aa760",
//   address: "1230 Grant Ave",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94133",
//   hours: the_house_hours,
//   latitude: 37.7984743,
//   longitude: -122.4092219,
//   phone: "(415)986-8612",
//   price_range: '$$$'
// }).save().then(savedBusiness => {
//   new Review({
//       business: savedBusiness._id,
//       author: '5e41c43b2ca0397438730ce2',
//       body: 'Good food! Will come again',
//       username: 'username3'
//   }).save()
// })

// const farmhouse_hours = {
//   mon: "11:00 am - 10:00 pm",
//   tue: "11:00 am - 10:00 pm",
//   wed: "11:00 am - 10:00 pm",
//   thurs: "11:00 am - 10:00 pm",
//   fri: "11:00 am - 10:30 pm",
//   sat: "12:00 pm - 10:30 pm",
//   sun: "12:00 pm - 10:00 pm"
// };

// new Business({
//   category: "5e449188acf32d81822aa761",
//   name: "Farmhouse Kitchen Thai Cuisine",
//   owner: "5e449188acf32d81822aa760",
//   address: "710 Florida St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94110",
//   hours: farmhouse_hours,
//   latitude: 37.7672023,
//   longitude: -122.9418707,
//   phone: "(415)814-2920",
//   price_range: "$$"
// }).save();

// const lolo_hours = {
//   mon: "5:30 pm - 11:00 pm",
//   tue: "5:30 pm - 11:00 pm",
//   wed: "5:30 pm - 11:00 pm",
//   thurs: "5:30 pm - 11:00 pm",
//   fri: "5:30 pm - 1:00 am",
//   sat: "11:00 am - 1:00 am",
//   sun: "11:00 am - 4:00 pm"
// };

// new Business({
//   category: "5e449188acf32d81822aa761",
//   name: "Lol??",
//   owner: "5e449188acf32d81822aa760",
//   address: "974 Valencia St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94110",
//   hours: lolo_hours,
//   latitude: 37.757375,
//   longitude: -122.4235415,
//   phone: "(415)643-5656",
//   price_range: "$$"
// }).save();

// const liholiho_hours = {
//   mon: "5:30 pm - 11:00 pm",
//   tue: "5:30 pm - 11:00 pm",
//   wed: "5:30 pm - 11:00 pm",
//   thurs: "5:30 pm - 11:00 pm",
//   fri: "5:30 pm - 1:00 am",
//   sat: "11:00 am - 1:00 am",
//   sun: "11:00 am - 4:00 pm"
// };

// new Business({
//   category: "5e449188acf32d81822aa761",
//   name: "Liholiho Yatch Club",
//   owner: "5e449188acf32d81822aa760",
//   address: "871 Sutter St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94109",
//   hours: liholiho_hours,
//   latitude: 37.7882319,
//   longitude: -122.4235415,
//   phone: "(415)440-5446",
//   price_range: "$$$"
// }).save();

// const tuba_hours = {
//   mon: "5:00 pm - 9:30 pm",
//   tue: "5:00 pm - 9:30 pm",
//   wed: "5:00 pm - 9:30 pm",
//   thurs: "5:00 pm - 9:30 pm",
//   fri: "5:00 pm - 10:30 pm",
//   sat: "5:00 pm - 10:30 pm",
//   sun: "5:00 pm - 9:30 pm"
// };

// new Business({
//   category: "5e449188acf32d81822aa761",
//   name: "Tuba Authentic Turkish Restaurant",
//   owner: "5e449188acf32d81822aa760",
//   address: "1007 Guerrero St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94110",
//   hours: tuba_hours,
//   latitude: 37.754996,
//   longitude: -122.422963,
//   phone: "(415)826-8822",
//   price_range: "$$"
// }).save();

// // shopping
// const westfield_center_hours = {
//   mon: "10:00 am - 8:30 pm",
//   tue: "10:00 am - 8:30 pm",
//   wed: "10:00 am - 8:30 pm",
//   thurs: "10:00 am - 8:30 pm",
//   fri: "10:00 am - 8:30 pm",
//   sat: "10:00 am - 8:30 pm",
//   sun: "11:00 am - 7:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa762",
//   name: "Westfield San Francisco Center",
//   owner: "5e449188acf32d81822aa760",
//   address: "865 Market St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: westfield_center_hours,
//   latitude: 37.783930,
//   longitude: -122.406834,
//   phone: "(415)512-6776",
//   price_range: '$$'
// }).save();

// const love_of_ganesha_hours = {
//   mon: "11:00 am - 6:30 pm",
//   tue: "11:00 am - 6:30 pm",
//   wed: "11:00 am - 6:30 pm",
//   thurs: "11:00 am - 6:30 pm",
//   fri: "11:00 am - 6:30 pm",
//   sat: "11:00 am - 6:30 pm",
//   sun: "11:00 am - 6:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa762",
//   name: "The Love of Ganesha",
//   owner: "5e449188acf32d81822aa760",
//   address: "1573 Haight St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94117",
//   hours: love_of_ganesha_hours,
//   latitude: 37.769839,
//   longitude: -122.448079,
//   phone: "(415)863-0999",
//   price_range: '$'
// }).save();

// const foggy_notion_hours = {
//   mon: "11:00 am - 7:00 pm",
//   tue: "11:00 am - 7:00 pm",
//   wed: "11:00 am - 7:00 pm",
//   thurs: "11:00 am - 7:00 pm",
//   fri: "11:00 am - 7:00 pm",
//   sat: "10:00 am - 7:00 pm",
//   sun: "10:00 am - 6:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa762",
//   name: "Foggy Notion",
//   owner: "5e449188acf32d81822aa760",
//   address: "124 Clement St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94118",
//   hours: foggy_notion_hours,
//   latitude: 37.783398,
//   longitude: -122.460565,
//   phone: "(415)683-5654",
//   price_range: '$$'
// }).save();

// const ferry_building_marketplace_hours = {
//   mon: "10:00 am - 6:00 pm",
//   tue: "10:00 am - 6:00 pm",
//   wed: "10:00 am - 6:00 pm",
//   thurs: "10:00 am - 6:00 pm",
//   fri: "10:00 am - 6:00 pm",
//   sat: "9:00 am - 6:00 pm",
//   sun: "11:00 am - 5:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa762",
//   name: "Ferry Building Marketplace",
//   owner: "5e449188acf32d81822aa760",
//   address: "1 Ferry Bldg",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94111",
//   hours: ferry_building_marketplace_hours,
//   latitude: 37.795961,
//   longitude: -122.393782,
//   phone: "(415)983-8030",
//   price_range: '$$'
// }).save();

// const post_script_hours = {
//   mon: "11:00 am - 7:00 pm",
//   tue: "11:00 am - 7:00 pm",
//   wed: "11:00 am - 7:00 pm",
//   thurs: "11:00 am - 7:00 pm",
//   fri: "11:00 am - 7:00 pm",
//   sat: "11:00 am - 7:00 pm",
//   sun: "11:00 am - 7:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa762",
//   name: "Post Script",
//   owner: "5e449188acf32d81822aa760",
//   address: "2413 California St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94115",
//   hours: post_script_hours,
//   latitude: 37.788836,
//   longitude: -122.434127,
//   phone: "(415)213-8392",
//   price_range: '$'
// }).save();

// // nightlife - 5e449188acf32d81822aa763

// const velvet_cantina_hours = {
//   mon: "5:00 pm - 12:00 am",
//   tue: "5:00 pm - 12:00 am",
//   wed: "5:00 pm - 12:00 am",
//   thurs: "5:00 pm - 12:00 am",
//   fri: "5:00 pm - 2:00 am",
//   sat: "5:00 pm - 2:00 am",
//   sun: "5:00 pm - 12:00 am"
// }

// new Business({
//   category: "5e449188acf32d81822aa763",
//   name: "Velvet Cantina",
//   owner: "5e449188acf32d81822aa760",
//   address: "3349 23rd St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94110",
//   hours: velvet_cantina_hours,
//   latitude: 37.753884,
//   longitude: -122.419418,
//   phone: "(415)648-4142",
//   price_range: '$$'
// }).save();

// const view_lounge_hours = {
//   mon: "4:00 pm - 12:00 am",
//   tue: "4:00 pm - 12:00 am",
//   wed: "4:00 pm - 12:00 am",
//   thurs: "4:00 pm - 12:00 am",
//   fri: "4:00 pm - 1:00 am",
//   sat: "4:00 pm - 1:00 am",
//   sun: "4:00 pm - 12:00 am"
// }

// new Business({
//   category: "5e449188acf32d81822aa763",
//   name: "The View Lounge",
//   owner: "5e449188acf32d81822aa760",
//   address: "780 Mission St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: view_lounge_hours,
//   latitude: 37.785422,
//   longitude: -122.404535,
//   phone: "(415)896-1600",
//   price_range: '$$'
// }).save();

// const rooftop_25_hours = {
//   mon: "11:30 am - 8:00 pm",
//   tue: "11:30 am - 8:00 pm",
//   wed: "11:30 am - 8:00 pm",
//   thurs: "11:30 am - 10:00 pm",
//   fri: "11:30 am - 10:00 pm",
//   sat: "11:30 am - 10:00 pm",
//   sun: "11:30 am - 8:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa763",
//   name: "Rooftop 25",
//   owner: "5e449188acf32d81822aa760",
//   address: "25 Lusk St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94107",
//   hours: rooftop_25_hours,
//   latitude: 37.778697,
//   longitude: -122.394296,
//   phone: "(415)390-3290",
//   price_range: '$$'
// }).save();

// const exploratorium_after_dark_hours = {
//   mon: "Closed",
//   tue: "Closed",
//   wed: "Closed",
//   thurs: "6:00 pm - 10:00 pm",
//   fri: "Closed",
//   sat: "Closed",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa763",
//   name: "Exploratorium After Dark",
//   owner: "5e449188acf32d81822aa760",
//   address: "Pier 15",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94111",
//   hours: exploratorium_after_dark_hours,
//   latitude: 37.801745,
//   longitude: -122.397473,
//   phone: "(415)302-1039",
//   price_range: '$$'
// }).save();

// const f8_nightclub_bar_hours = {
//   mon: "Closed",
//   tue: "10:00 pm - 1:00 am",
//   wed: "5:00 pm - 2:00 am",
//   thurs: "9:00 pm - 2:00 am",
//   fri: "5:00 pm - 3:00 am",
//   sat: "10:00 pm - 3:00 am",
//   sun: "10:00 pm - 2:00 am"
// }

// new Business({
//   category: "5e449188acf32d81822aa763",
//   name: "F8 Nightclub and Bar",
//   owner: "5e449188acf32d81822aa760",
//   address: "1192 Folsom",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: f8_nightclub_bar_hours,
//   latitude: 37.775500,
//   longitude: -122.409980,
//   phone: "(415)432-4302",
//   price_range: '$$'
// }).save();

// // beauty & spas - 5e449188acf32d81822aa765

// const pearl_hours = {
//   mon: "8:00 am - 9:00 pm",
//   tue: "8:00 am - 9:00 pm",
//   wed: "8:00 am - 9:00 pm",
//   thurs: "8:00 am - 9:00 pm",
//   fri: "8:00 am - 9:00 pm",
//   sat: "8:00 am - 9:00 pm",
//   sun: "8:00 am - 9:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa765",
//   name: "Pearl Spa & Sauna",
//   owner: "5e449188acf32d81822aa760",
//   address: "1656 Post St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94115",
//   hours: pearl_hours,
//   latitude: 37.7858991,
//   longitude: -122.4313295,
//   phone: "(415)432-4302",
//   price_range: '$$'
// }).save();

// const kabuki_hours = {
//   mon: "10:00 am - 10:00 pm",
//   tue: "10:00 am - 10:00 pm",
//   wed: "10:00 am - 10:00 pm",
//   thurs: "10:00 am - 10:00 pm",
//   fri: "10:00 am - 10:00 pm",
//   sat: "10:00 am - 10:00 pm",
//   sun: "10:00 am - 10:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa765",
//   name: "Kabuki Springs & Spa",
//   owner: "5e449188acf32d81822aa760",
//   address: "1750 Geary Blvd",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94115",
//   hours: kabuki_hours,
//   latitude: 37.7847436,
//   longitude: -122.4348216,
//   phone: "(415)922-6000",
//   price_range: '$$'
// }).save();

// const saf_hours = {
//   mon: "Closed",
//   tue: "10:00 am - 8:00 pm",
//   wed: "10:00 am - 8:00 pm",
//   thurs: "10:00 am - 8:00 pm",
//   fri: "10:00 am - 8:00 pm",
//   sat: "10:00 am - 8:00 pm",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa765",
//   name: "Saf Beauty",
//   owner: "5e449188acf32d81822aa760",
//   address: "1205 Pine St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94109",
//   hours: saf_hours,
//   latitude: 37.7901132,
//   longitude: -122.4180192,
//   phone: "(415)319-5712",
//   price_range: '$$'
// }).save();

// const spa_hours = {
//   mon: "10:00 am - 8:00 pm",
//   tue: "4:00 pm - 8:00 pm",
//   wed: "4:00 pm - 8:00 pm",
//   thurs: "10:00 am - 8:00 pm",
//   fri: "10:00 am - 8:00 pm",
//   sat: "9:00 am - 8:00 pm",
//   sun: "9:00 am - 8:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa765",
//   name: "Spa Vitale",
//   owner: "5e449188acf32d81822aa760",
//   address: "8 Mission St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94105",
//   hours: spa_hours,
//   latitude: 37.7934897,
//   longitude: -122.3953339,
//   phone: "(415)530-2572",
//   price_range: '$$$'
// }).save();

// const skin_hours = {
//   mon: "9:00 am - 6:00 pm",
//   tue: "9:00 am - 8:00 pm",
//   wed: "9:00 am - 8:00 pm",
//   thurs: "9:00 am - 8:00 pm",
//   fri: "9:00 am - 7:00 pm",
//   sat: "9:00 am - 6:00 pm",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa765",
//   name: "SkinSpirit - Presidio Heights",
//   owner: "5e449188acf32d81822aa760",
//   address: "3325 Sacramento St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94118",
//   hours: skin_hours,
//   latitude: 37.7879572,
//   longitude: -122.4496407,
//   phone: "(415)692-0316",
//   price_range: '$$$'
// }).save();

// // automotive - 5e449188acf32d81822aa766

// const golden_hours = {
//   mon: "8:00 am - 5:00 pm",
//   tue: "8:00 am - 5:00 pm",
//   wed: "8:00 am - 5:00 pm",
//   thurs: "8:00 am - 5:00 pm",
//   fri: "8:00 am - 5:00 pm",
//   sat: "Closed",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa766",
//   name: "Golden Auto Mufller & Brake Center",
//   owner: "5e449188acf32d81822aa760",
//   address: "998 Folsom St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94107",
//   hours: golden_hours,
//   latitude: 37.7788152,
//   longitude: -122.4078428,
//   phone: "(415)543-8899",
//   price_range: '$$'
// }).save();

// const juarez_hours = {
//   mon: "7:00 am - 8:30 pm",
//   tue: "8:00 am - 8:00 pm",
//   wed: "7:00 am - 8:30 pm",
//   thurs: "7:00 am - 8:00 pm",
//   fri: "7:00 am - 8:00 pm",
//   sat: "7:00 am - 8:00 pm",
//   sun: "8:00 am - 8:30 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa766",
//   name: "Juarez Tires and Brakes",
//   owner: "5e449188acf32d81822aa760",
//   address: "1398 Folsom St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: juarez_hours,
//   latitude: 37.7730601,
//   longitude: -122.4149865,
//   phone: "(415)571-7351",
//   price_range: '$$'
// }).save();

// const val_hours = {
//   mon: "8:00 am - 5:00 pm",
//   tue: "8:00 am - 5:00 pm",
//   wed: "8:00 am - 5:00 pm",
//   thurs: "8:00 am - 5:00 pm",
//   fri: "8:00 am - 5:00 pm",
//   sat: "Closed",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa766",
//   name: "Val's Auto Upholstery",
//   owner: "5e449188acf32d81822aa760",
//   address: "430 S Van Ness Ave",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: val_hours,
//   latitude: 37.7663276,
//   longitude: -122.4199711,
//   phone: "(415)558-8498",
//   price_range: '$$'
// }).save();

// const driveshafts_hours = {
//   mon: "Open 24 hours",
//   tue: "Open 24 hours",
//   wed: "Open 24 hours",
//   thurs: "Open 24 hours",
//   fri: "Open 24 hours",
//   sat: "Open 24 hours",
//   sun: "Open 24 hours"
// }

// new Business({
//   category: "5e449188acf32d81822aa766",
//   name: "Driveshafts by Frank Wallace",
//   owner: "5e449188acf32d81822aa760",
//   address: "1830 Burrows St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94134",
//   hours: driveshafts_hours,
//   latitude: 37.724814,
//   longitude: -122.421486,
//   phone: "(414)742-1948",
//   price_range: '$'
// }).save();

// const west_wind_auto_hours = {
//   mon: "7:30 am - 5:00 pm",
//   tue: "7:30 am - 5:00 pm",
//   wed: "7:30 am - 5:00 pm",
//   thurs: "7:30 am - 5:00 pm",
//   fri: "7:30 am - 5:00 pm",
//   sat: "Closed",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa766",
//   name: "West Wind Automotive",
//   owner: "5e449188acf32d81822aa760",
//   address: "351 Valencia St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: west_wind_auto_hours,
//   latitude: 37.767486,
//   longitude: -122.421867,
//   phone: "(414)932-1842",
//   price_range: '$$$'
// }).save();

// // active life - 5e449188acf32d81822aa764

// const certified_firearm_hours = {
//   mon: "Closed",
//   tue: "Closed",
//   wed: "Closed",
//   thurs: "Closed",
//   fri: "Closed",
//   sat: "8:00 am - 5:00 pm",
//   sun: "8:00 am - 5:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa764",
//   name: "Certified Firearms Instruction and Training",
//   owner: "5e449188acf32d81822aa760",
//   address: "193 Monterey Heights",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94127",
//   hours: certified_firearm_hours,
//   latitude: 37.763853,
//   longitude: -122.467735,
//   phone: "(415)392-1948",
//   price_range: '$$'
// }).save();

// const subpar_golf_hours = {
//   mon: "11:00 am - 10:00 pm",
//   tue: "11:00 am - 10:00 pm",
//   wed: "11:00 am - 10:00 pm",
//   thurs: "11:00 am - 10:00 pm",
//   fri: "10:00 am - 11:30 pm",
//   sat: "10:00 am - 11:30 pm",
//   sun: "10:00 am - 10:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa764",
//   name: "Subpar Miniature Golf",
//   owner: "5e449188acf32d81822aa760",
//   address: "900 North Point St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94109",
//   hours: subpar_golf_hours,
//   latitude: 37.806168,
//   longitude: -122.423252,
//   phone: "(415)204-2945",
//   price_range: '$$'
// }).save();

// const golden_gate_hours = {
//   mon: "8:30 am - 7:00 pm",
//   tue: "8:30 am - 7:00 pm",
//   wed: "8:30 am - 7:00 pm",
//   thurs: "8:30 am - 7:00 pm",
//   fri: "8:30 am - 7:00 pm",
//   sat: "8:30 am - 7:00 pm",
//   sun: "8:30 am - 7:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa764",
//   name: "Golden Gate Knights",
//   owner: "5e449188acf32d81822aa760",
//   address: "19 Heron St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94103",
//   hours: golden_gate_hours,
//   latitude: 37.774670,
//   longitude: -122.408419,
//   phone: "(415)934-2048",
//   price_range: '$$$'
// }).save();

// const axeventures_axe_hours = {
//   mon: "2:00 pm - 9:30 pm",
//   tue: "1:00 pm - 10:15 pm",
//   wed: "1:00 pm - 10:15 pm",
//   thurs: "1:00 pm - 10:15 pm",
//   fri: "1:00 pm - 10:15 pm",
//   sat: "11:15 am - 12:00 am",
//   sun: "11:15 am - 9:30 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa764",
//   name: "AxeVentures Axe Throwing",
//   owner: "5e449188acf32d81822aa760",
//   address: "2566 Telegraph Ave Ste D",
//   city: "Berkeley",
//   state: "CA",
//   zipcode: "94704",
//   hours: axeventures_axe_hours,
//   latitude: 37.863971,
//   longitude: -122.258913,
//   phone: "(415)928-2948",
//   price_range: '$$$'
// }).save();

// const sevend_experience_hours = {
//   mon: "10:00 am - 9:00 pm",
//   tue: "10:00 am - 9:00 pm",
//   wed: "10:00 am - 9:00 pm",
//   thurs: "10:00 am - 9:00 pm",
//   fri: "10:00 am - 9:00 pm",
//   sat: "10:00 am - 9:00 pm",
//   sun: "10:00 am - 9:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa764",
//   name: "7D Experience",
//   owner: "5e449188acf32d81822aa760",
//   address: "Pier 39",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94133",
//   hours: sevend_experience_hours,
//   latitude: 37.811044,
//   longitude: -122.410279,
//   phone: "(415)204-1949",
//   price_range: '$$$'
// }).save();

// // home services - 5e449188acf32d81822aa767

// const valentinas_handyman_hours = {
//   mon: "8:30 am - 7:00 pm",
//   tue: "8:30 am - 7:00 pm",
//   wed: "8:30 am - 7:00 pm",
//   thurs: "8:30 am - 7:00 pm",
//   fri: "8:30 am - 7:00 pm",
//   sat: "8:30 am - 7:00 pm",
//   sun: "8:30 am - 7:00 pm"
// }

// new Business({
//   category: "5e449188acf32d81822aa767",
//   name: "Valentina's Handyman",
//   owner: "5e449188acf32d81822aa760",
//   address: "2414 Fulton St",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94118",
//   hours: valentinas_handyman_hours,
//   latitude: 37.774934,
//   longitude: -122.456859,
//   phone: "(415)234-1452",
//   price_range: '$$'
// }).save();

// const gabrielas_bright_cleaning_hours = {
//   mon: "8:00 am - 6:00 pm",
//   tue: "8:00 am - 6:00 pm",
//   wed: "8:00 am - 6:00 pm",
//   thurs: "8:00 am - 6:00 pm",
//   fri: "8:00 am - 6:00 pm",
//   sat: "8:00 am - 6:00 pm",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa767",
//   name: "Gabriela's Bright Cleaning",
//   owner: "5e449188acf32d81822aa760",
//   address: "Daly City",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94014",
//   hours: gabrielas_bright_cleaning_hours,
//   latitude: 37.683826,
//   longitude: -122.477340,
//   phone: "(415)391-9485",
//   price_range: '$'
// }).save();

// const marias_cleaning_services = {
//   mon: "8:00 am - 5:00 pm",
//   tue: "8:00 am - 5:00 pm",
//   wed: "8:00 am - 5:00 pm",
//   thurs: "8:00 am - 5:00 pm",
//   fri: "8:00 am - 5:00 pm",
//   sat: "8:00 am - 5:00 pm",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa767",
//   name: "Maria's Cleaning Services",
//   owner: "5e449188acf32d81822aa760",
//   address: "1931 Folsom",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94123",
//   hours: marias_cleaning_services,
//   latitude: 37.721199,
//   longitude: -122.451068,
//   phone: "(415)230-1049",
//   price_range: '$'
// }).save();

// const twofourseven_rooter_plumbing_hours = {
//   mon: "7:00 am - 12:00 am",
//   tue: "7:00 am - 12:00 am",
//   wed: "7:00 am - 12:00 am",
//   thurs: "7:00 am - 12:00 am",
//   fri: "7:00 am - 12:00 am",
//   sat: "7:00 am - 12:00 am",
//   sun: "7:00 am - 12:00 am"
// }

// new Business({
//   category: "5e449188acf32d81822aa767",
//   name: "24/7 Rooter & Plumbing",
//   owner: "5e449188acf32d81822aa760",
//   address: "1070 Quesada Ave",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94124",
//   hours: twofourseven_rooter_plumbing_hours,
//   latitude: 37.727042,
//   longitude: -122.379756,
//   phone: "(415)390-1948",
//   price_range: '$$'
// }).save();

// const in_n_out_handyman_service_hours = {
//   mon: "9:00 am - 5:00 pm",
//   tue: "9:00 am - 5:00 pm",
//   wed: "9:00 am - 5:00 pm",
//   thurs: "9:00 am - 5:00 pm",
//   fri: "9:00 am - 5:00 pm",
//   sat: "9:00 am - 5:00 pm",
//   sun: "Closed"
// }

// new Business({
//   category: "5e449188acf32d81822aa767",
//   name: "In n Out Handyman Service n Repairs",
//   owner: "5e449188acf32d81822aa760",
//   address: "113 Bayview-Hunters Point",
//   city: "San Francisco",
//   state: "CA",
//   zipcode: "94124",
//   hours: in_n_out_handyman_service_hours,
//   latitude: 37.780525,
//   longitude: -122.436857,
//   phone: "(415)932-1942",
//   price_range: '$'
// }).save();


// new User({ // Don't create a new user though since it'll save password to db instead of pw hash, just an example to show how the function works
//   username: 'new_user',
//   email: 'guy@gmail.com',
//   password: 'hunter12'
// }).save(function(err, user) {
//   console.log(user.id)
// });


// -- Proper way of doing references with seeds file --
// new Group({
//   title: "absolutely utmost newest Seed",
//   desc: "seed desc",
//   location: "online",
//   organizer: "Seed master"
// }).save()
//   .then(group => {
//     new Event({
//       title: "seed event",
//       desc: "seed event description",
//       location: "soil",
//       group_id: group._id,
//       event_start: "2020-03-01",
//       event_end: new Date("December 15, 2021")
//     }).save()
//       .then(event => {
//         group.events.push(event._id)
//         group.save()
//       })
//   }).then(console.log("done seeding"))

