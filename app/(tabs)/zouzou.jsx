import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";


export default function ZouZou() {
 return (
   <ScrollView
     style={{ flex: 1, backgroundColor: "#F9FBFF", paddingHorizontal: 20 }}
     showsVerticalScrollIndicator={false}
   >
     {/* Header */}
     <Text
       style={{
         fontSize: 24,
         fontFamily: "outfit-bold",
         textAlign: "center",
         marginTop: 20
       }}
     >
       ZouZou
     </Text>
     <Text
       style={{
         textAlign: "center",
         color: Colors.GRAY,
         fontFamily: "outfit"
       }}
     >
       Convert your steps into points for rewards!
     </Text>


     {/* Points & Redeem */}
     <View
       style={{
         backgroundColor: "white",
         padding: 15,
         borderRadius: 15,
         marginTop: 20,
         shadowColor: "#000",
         shadowOpacity: 0.1,
         shadowRadius: 4,
         elevation: 5
       }}
     >
       <Text style={{ fontSize: 24, fontFamily: "outfit-bold", textAlign: "center" }}>
         3,681 <Text style={{ fontSize: 16, color: Colors.GRAY }}>points</Text>
       </Text>
       <Text
         style={{
           fontSize: 12,
           textAlign: "center",
           color: Colors.GRAY,
           marginBottom: 10
         }}
       >
         Last updated 15 Aug, 16:40
       </Text>
      
       <TouchableOpacity
         style={{
           backgroundColor: Colors.PRIMARY,
           paddingVertical: 10,
           borderRadius: 10,
           alignItems: "center"
         }}
       >
         <Text style={{ color: "white", fontFamily: "outfit-medium", fontSize: 16 }}>
           Redeem now
         </Text>
       </TouchableOpacity>


       {/* Expiring Points */}
       <View
         style={{
           flexDirection: "row",
           alignItems: "center",
           backgroundColor: "#EAF2FF",
           padding: 10,
           borderRadius: 10,
           marginTop: 10
         }}
       >
         <Ionicons name="warning-outline" size={18} color={Colors.PRIMARY} />
         <Text
           style={{
             fontSize: 12,
             marginLeft: 5,
             color: Colors.GRAY
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
         marginTop: 20
       }}
     >
       {["Catalogue", "Rewards", "My Steps", "Point History"].map((item, index) => (
         <TouchableOpacity key={index} style={{ alignItems: "center" }}>
           <Ionicons name="pricetag-outline" size={24} color={Colors.PRIMARY} />
           <Text style={{ fontSize: 12, fontFamily: "outfit-medium", color: Colors.GRAY }}>
             {item}
           </Text>
         </TouchableOpacity>
       ))}
     </View>


     {/* Available Vouchers */}
     <View style={{ marginTop: 20 }}>
       <Text
         style={{
           fontSize: 18,
           fontFamily: "outfit-bold",
           marginBottom: 10
         }}
       >
         Available Voucher
       </Text>


       {/* Voucher List */}
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {[
           { name: "Tealive RM5 Off", points: 500, image: "tealive.jpg" },
           { name: "Sunway Lagoon RM30 Off", points: 2500, image: "sunway.jpg" },
           { name: "Bobbi Brown 15%", points: 200, image: "bobbi.jpg" }
         ].map((voucher, index) => (
           <View
             key={index}
             style={{
               backgroundColor: "white",
               borderRadius: 10,
               padding: 10,
               marginRight: 15,
               alignItems: "center",
               shadowColor: "#000",
               shadowOpacity: 0.1,
               shadowRadius: 4,
               elevation: 3
             }}
           >
             <Image
               source={{ uri: `https://your-image-source/${voucher.image}` }}
               style={{ width: 80, height: 60, borderRadius: 5 }}
             />
             <Text style={{ fontSize: 14, fontFamily: "outfit-medium", marginTop: 5 }}>
               {voucher.name}
             </Text>
             <Text style={{ fontSize: 12, color: Colors.GRAY }}>
               {voucher.points} points
             </Text>
           </View>
         ))}
       </ScrollView>
     </View>


     {/* How to collect points */}
     <View
       style={{
         backgroundColor: "#EAF2FF",
         padding: 15,
         borderRadius: 10,
         marginTop: 20
       }}
     >
       <Text style={{ fontSize: 16, fontFamily: "outfit-bold", marginBottom: 5 }}>
         How to collect points?
       </Text>
       <Text style={{ fontSize: 14, fontFamily: "outfit", color: Colors.GRAY }}>
         10,000 Steps = 1,000 Points
       </Text>
     </View>
   </ScrollView>
 );
}
