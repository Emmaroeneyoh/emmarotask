const { ItineraryModel } = require("../../core/db/Itinerary");



const mgnaddaccomodationModel = async (data, res) => {
    try {
      const { mgnid ,accomodation} = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $push: {
          accomodation
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  const mgnremoveaccomodationModel = async (data, res) => {
    try {
      const { mgnid ,accomodationid } = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $pull: {
         accomodation: { _id :accomodationid },
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  
const mgneditaccomodationModel = async (data, res) => {
    try {
      const {
     accomodationid ,  name , checkInDate , checkoutDate , address,
      } = data;
  
      //updating the trainer pofile1
      const form = await ItineraryModel.updateOne(
        { "accomodation._id": accomodationid },
        {
          $set: {
            "accomodation.$.name": name,
            "accomodation.$.checkInDate": checkInDate,
            "accomodation.$.checkoutDate": checkoutDate,
            "accomodation.$.address": address,
          },
        },
        { new: true }
      );
  
      return form;
    } catch (error) {
      console.log(error)
      return error.message
    }
};
  

module.exports = {
    mgneditaccomodationModel ,  mgnremoveaccomodationModel , mgnaddaccomodationModel
}