import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          A blood bank is a place where blood is collected and stored before it is used for transfusions.
           Blood banking takes place in the lab. 
           This is to make sure that donated blood and blood products are safe before they are used. 
           Blood banking also determines the blood type.
           The blood is also tested for infectious diseases.
           <h4>Facts about blood banking</h4>
According to the American Red Cross:
About 36,000 units of blood are needed every day.
The number of blood units donated is about 13.6 million a year.
About 6.8 million volunteers are blood donors each year.
Each unit of blood is broken down into components. These are red blood cells, plasma, cryoprecipitated AHF (cryo), a white blood cell called a granulocyte, and platelets. One unit of whole blood and its parts may be transfused to several people. Each person may have a different need.
More than 21 million blood components are transfused each year.
<h5>Who are the blood donors?</h5>
Most blood donors are volunteers. But you may also donate blood several weeks before having surgery. This is so that your blood is available in case you need a transfusion. Donating blood for yourself is called an autologous donation.
Volunteer blood donors must meet certain criteria. These include:
Must be at least 16 years of age, or the minimum age set by state law   
Must be in good health
Must weigh at least 110 pounds
Must pass the physical and health history exam given before donation
Some states let people younger than 16 or 17 years to donate blood, with parental consent.
<h5>What are the blood types?</h5>
According to the AABB, blood types make up the following portions of the U.S. population:

O Rh-positive - 39%

A Rh-positive - 30%

B Rh-positive - 9%

O Rh-negative - 9%

A Rh-negative - 6%

AB Rh-positive - 4%

B Rh-negative - 2%

AB Rh-negative - 1%
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
