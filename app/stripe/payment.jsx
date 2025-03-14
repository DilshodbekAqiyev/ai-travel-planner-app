import { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useStripe, initStripe } from "@stripe/stripe-react-native";
import { Screen } from "react-native-screens";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function CheckoutScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { price } = useLocalSearchParams();

  const router = useRouter();

  console.log("price:", price);

  const amount = parseInt(price.replace("$", "").replace(",", ""))
  console.log("Amount:", amount);


  const fetchPaymentSheetParams = async () => {
    console.log("Try to fetch");

    const API_URL = "https://ai-travel-planner-api.onrender.com"
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 })
    });

    const data = await response.json();
    console.log("data: ", data);

    const { paymentIntent, ephemeralKey, customer } = data;

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    // const {
    //   paymentIntent,
    //   ephemeralKey,
    //   customer,
    // } = await fetchPaymentSheetParams();

    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    // const testData = {
    //   paymentIntent: "pi_3R2PAwFRUQnBuRLz0YZ0GkCR_secret_zHIr2FqmCA1dFu3sW1jQuHC51",
    //   ephemeralKey: "ek_test_YWNjdF8xTXdtajJGUlVRbkJ1Ukx6LGF6aGVkVFV6clREa3Z3bnVHa0dDWTY2ckp3V1ZSdjI_00ay7NfgfB",
    //   customer: "cus_RwHkGLeCOOZEMM",
    //   publishableKey: "pk_test_51Mwmj2FRUQnBuRLz2BQ5FbnU1MD42CI91WPOXmzZTZ63TYMcEzbcDFSUCoUOU5RLsq4H9ysZIIsqJZ6Dw6iPaFWT009WBKkxGN"
    // }

    // console.log(paymentIntent, ephemeralKey, customer);

    const { error } = await initPaymentSheet({
      merchantDisplayName: "WeJustGo Inc.",
      // customerId: testData.customer,
      // customerEphemeralKeySecret: testData.ephemeralKey,
      // paymentIntentClientSecret: testData.paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
    }
    else {
      console.log("Error: ", error);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      setPaymentSuccess(true);
      console.log('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    // setPaymentSuccess(false);
    initializePaymentSheet();
    initStripe({
      publishableKey: "pk_test_51Mwmj2FRUQnBuRLz2BQ5FbnU1MD42CI91WPOXmzZTZ63TYMcEzbcDFSUCoUOU5RLsq4H9ysZIIsqJZ6Dw6iPaFWT009WBKkxGN",
      urlScheme: "http://"
    }).then(() => {
      console.log("stripe initialized.")
    }).catch((error) => {
      console.log("Error in stripe:", error);
    })
  }, []);

  return (
    <Screen
      style={{
        marginTop: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10
        }}
        onPress={() => { router.back() }}>
        <Ionicons name="arrow-back" size={32} color="black" />
      </TouchableOpacity>

      {!paymentSuccess
        ? (<>
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 28
            }}
          >
            Proceed with Booking
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 50,
              width: 200,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#204E81",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={openPaymentSheet}>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: "white"
              }}
            >Checkout</Text>
          </TouchableOpacity>
        </>)
        : <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 32,
          marginTop: 50,
          textAlign: "center"
        }}
      >
        Payment Successful! Your order is confirmed!
      </Text>
      }

    </Screen>
  );
}