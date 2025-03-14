import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";


export default function ZouZou() {
  const router = useRouter();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          backgroundColor: "#E3F0FE",
          paddingBottom: 30
        }}
      >
        {/* Header */}
        <Text
          style={{
            fontSize: 32,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 40
          }}
        >
          ZouZou
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#204E81",
            fontFamily: "outfit",
            fontStyle: "italic",
            opacity: 0.5
          }}
        >
          Convert your steps into points for rewards!
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 25
        }}
      >
        {/* Points & Redeem */}
        <View
          style={{
            backgroundColor: "#BBDDFD",
            padding: 15,
            // borderRadius: 15,
            marginTop: 20,
            // shadowColor: "#000",
            // shadowOpacity: 0.1,
            // shadowRadius: 4,
            // elevation: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <View
              style={{
                // backgroundColor: "lightblue",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
              }}
            >
              <Text style={{ fontSize: 24, fontFamily: "outfit-bold", textAlign: "center", color: "#204E81" }}>
                3,681 <Text style={{ fontSize: 16, color: "#204E81" }}>points</Text>
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: "#204E81",
                  marginBottom: 10
                }}
              >
                Last updated 15 Aug, 16:40
              </Text>
            </View>


            <TouchableOpacity
              style={{
                backgroundColor: "white",
                paddingVertical: 10,
                borderRadius: 30,
                alignItems: "center",
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => { router.push("/screens/catalogue") }}
            >
              <Text style={{ color: "#204E81", fontFamily: "outfit-medium", fontSize: 16 }}>
                Redeem now
              </Text>
            </TouchableOpacity>
          </View>




          {/* Expiring Points */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#E3F0FE",
              padding: 10,
              borderRadius: 10,
              marginTop: 10
            }}
          >
            {/* <Ionicons name="warning-outline" size={18} color={Colors.PRIMARY} /> */}
            <Image source={require("./../../assets/images/expire-date.png")} />
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
                color: "#204E81",
                paddingLeft: 10,
                fontFamily: "outfit-medium"
              }}
            >
              666 points will expire by 05 Sept 2025
            </Text>
          </View>
        </View>


        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#204E81",
            height: 76,
            paddingTop: 5
          }}
        >

          {/* screens */}
          <TouchableOpacity
            key={0} style={{ alignItems: "center", gap: 10 }}
            onPress={() => { router.push("/screens/catalogue") }}
          >
            <Image source={require("./../../assets/images/catalogue.png")} width={20} height={20} />
            <Text style={{ fontSize: 12, fontFamily: "outfit-medium", color: "white" }}>
              Catalogue
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            key={0} style={{ alignItems: "center", gap: 10 }}
            onPress={() => { router.push("/screens/rewards") }}
          >
            <Image source={require("./../../assets/images/rewards.png")} />
            <Text style={{ fontSize: 12, fontFamily: "outfit-medium", color: "white" }}>
              Rewards
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            key={0} style={{ alignItems: "center", gap: 10 }}
            onPress={() => { router.push("/screens/mysteps") }}
          >
            <Image source={require("./../../assets/images/mysteps.png")} />
            <Text style={{ fontSize: 12, fontFamily: "outfit-medium", color: "white" }}>
              My Steps
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            key={0} style={{ alignItems: "center", gap: 10 }}
            onPress={() => { router.push("/screens/pointhistory") }}
          >
            <Image source={require("./../../assets/images/point-history.png")} />
            <Text style={{ fontSize: 12, fontFamily: "outfit-medium", color: "white" }}>
              Point History
            </Text>
          </TouchableOpacity>
        </View>


        {/* Available Vouchers */}
        <View style={{ marginTop: 20 }}>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "outfit-bold",
              }}
            >
              Available Voucher
            </Text>

            <TouchableOpacity onPress={() => { router.push("/screens/catalogue") }}>
              <Text
                style={{
                  color: "#204E81",
                  fontFamily: "outfit-medium",
                  fontSize: 16
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>



          {/* Voucher List */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { name: "Tealive RM5 Off", points: 500, image: "https://static.wixstatic.com/media/2c0fab_5fb1c9d1510e42ac86ad8bad39dad922~mv2.png/v1/fill/w_560,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pavi-Bkt-Jalil-3.png" },
              { name: "Sunway Lagoon RM30 Off", points: 2500, image: "https://www.pelago.com/img/products/MY-Malaysia/sunway-lagoon-amusement--water-park/f232c683-08bf-4fd0-b7a8-025cbbef03a7_sunway-lagoon-theme-park.jpg" },
              { name: "Bobbi Brown 15%", points: 200, image: "https://m.bobbibrown.com.my/media/export/cms/Homepage/IS_Cushion_Banner_Mobile.png" }
            ].map((voucher, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 10,
                  marginRight: 15,
                  alignItems: "flex-start",
                  // shadowColor: "#000",
                  // shadowOpacity: 0.1,
                  // shadowRadius: 4,
                  // elevation: 3,
                  width: 150
                }}
              >
                <Image
                  source={{ uri: `${voucher.image}` }}
                  style={{ width: 110, height: 100, borderRadius: 15 }}
                />
                <Text style={{ fontSize: 16, fontFamily: "outfit-medium", marginTop: 5 }}>
                  {voucher.name}
                </Text>
                <Text style={{ fontSize: 14, fontFamily: "outfit-medium", color: "#204E81", width: "100%", textAlign: "left" }}>
                  {voucher.points} points
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>


        {/* How to collect points */}
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            // marginTop: 30,
            height: 150,
            marginTop: 20,
            marginHorizontal: 15,
            backgroundColor: "#BBDDFD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "outfit-bold", marginVertical: 5, marginLeft: 30, width: "100%", textAlign: "left", paddingBottom: 10 }}>
            How to collect points?
          </Text>

          <View
            style={{
              width: "80%",
              backgroundColor: "#204E81",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
              padding: 10,
              borderRadius: 20,
              height: 70
            }}
          >
            <Image source={require("./../../assets/images/mysteps.png")} />
            <Text style={{ fontSize: 16, fontFamily: "outfit", color: "white", width: "80%" }}>
              10,000 Steps = 1,000 Points
            </Text>
          </View>

        </View>

      </View>

    </ScrollView>
  );
}
