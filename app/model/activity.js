const { ItineraryModel } = require("../../core/db/Itinerary");



const mgnaddactivityModel = async (data, res) => {
    try {
        const { mgnid, activity } = data;
        console.log(activity)
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $push: {
            activities:activity
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  const mgnremoveactivityModel = async (data, res) => {
    try {
      const { mgnid ,activityid } = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $pull: {
            activities: { _id :activityid },
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  
const mgneditactivityModel = async (data, res) => {
    try {
      const {
     activityid , location , name , date
      } = data;
  console.log(name , location , date,)
      //updating the trainer pofile1
      const form = await ItineraryModel.updateOne(
        { "activities._id": activityid },
        {
          $set: {
            "activities.$.location": location,
            "activities.$.name": name,
            "activities.$.date": date,
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
    mgneditactivityModel ,  mgnremoveactivityModel , mgnaddactivityModel
}