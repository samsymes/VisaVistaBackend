// // COPIED FROM FRONTEND

// class CountryFlagService {
//   constructor() {
//     this.countryList = [];
//   }
//   async getCountryList() {
//     const response = await fetch("https://flagcdn.com/en/codes.json");
//     const countryData = await response.json();
//     const countryFlagList = Object.entries(countryData).map(
//       ([value, label]) => ({
//         value,
//         label,
//       })
//     );

//     return countryFlagList;
//   }
// }

// export default new CountryFlagService();
