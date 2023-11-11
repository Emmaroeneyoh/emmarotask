const { ItineraryModel } = require("../../core/db/Itinerary");


const createmgnModel = async (data, res) => {
    try {
      const {
        userid,
        start,
        end,
        destination,
        activities,
        transportation,
        accomodation, mgnname
      } = data;
      const form = await new ItineraryModel({
       user: userid,
       date: {
        start , end
    },
        destination,
        activities,
        transportation,
        accomodation, name: mgnname
      });
  
      const userDetails = await form.save();
  
      return userDetails;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  

  const updatemgnModel = async (data, res) => {
    try {
      const {
        userid,
        start,
        end,
        mgnid , mgnname
      } = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $set: {
           user: userid,
              date: {
                start , end
            },
            name: mgnname
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  

module.exports = {
    createmgnModel  , updatemgnModel
  }