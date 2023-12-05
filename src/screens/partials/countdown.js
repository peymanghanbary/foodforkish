import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../../styles/style";

const endOfTheDay = new Date().setHours(23, 59, 59, 999); //1699475399999
const expiryDate = new Date(endOfTheDay);
const Countdown = ({ hideTitle = false,ph=10,pv=3,fontSize=24,borderRadius=15 }) => {
  const [timeUnits, setTimeUnits] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeUnits = (timeDifference) => {
      const seconds = Math.floor(timeDifference / 1000);
      setTimeUnits({
        years: Math.floor(seconds / (365 * 24 * 60 * 60)),
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      });
    };

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const expiryTime = expiryDate.getTime();
      const timeDifference = expiryTime - currentDate;

      if (timeDifference <= 0) {
        // Countdown finished
        calculateTimeUnits(0);
      } else {
        calculateTimeUnits(timeDifference);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {!hideTitle && (
          <Text
            style={{
              fontFamily: fonts.BOLD,
              fontSize: 18,
              color: colors.rose500,
            }}
          >
            زمان اتمام جشنواره :
          </Text>
        )}
        <View style={styles.timer}>
          {/* <Text 
                        style={[ 
                            styles.timeUnit, 
                            styles.yearUnit, 
                        ]} 
                    > 
                        {formatTime(timeUnits.years)} 
                    </Text> 
                    <Text 
                        style={styles.timeSeparator} 
                    ></Text> 
                    <Text 
                        style={[ 
                            styles.timeUnit, 
                            styles.dayUnit, 
                        ]} 
                    > 
                        {formatTime(timeUnits.days)} 
                    </Text>  */}
          {/* <Text style={styles.timeSeparator} /> */}
          <Text style={[styles.timeUnit, styles.hourUnit,{paddingHorizontal:ph,paddingVertical:pv,fontSize:fontSize,borderRadius:borderRadius}]}>
            {formatTime(timeUnits.hours)}
          </Text>
          <Text style={styles.timeSeparator} />
          <Text style={[styles.timeUnit, styles.minuteUnit,{paddingHorizontal:ph,paddingVertical:pv,fontSize:fontSize,borderRadius:borderRadius}]}>
            {formatTime(timeUnits.minutes)}
          </Text>
          <Text style={styles.timeSeparator} />
          <Text style={[styles.timeUnit, styles.secondUnit,{paddingHorizontal:ph,paddingVertical:pv,fontSize:fontSize,borderRadius:borderRadius}]}>
            {formatTime(timeUnits.seconds)}
          </Text>
          <Text style={styles.timeSeparator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
    padding: 0,
    margin: 0,
  },
  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 20,
    color: "green",
  },
  subtitle: {
    marginBottom: 20,
    fontSize: 18,
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeUnit: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  yearUnit: {
    backgroundColor: "red",
    color: "white",
  },
  dayUnit: {
    backgroundColor: colors.red,
    color: "white",
  },
  hourUnit: {
    backgroundColor: colors.red,
    color: "white",
  },
  minuteUnit: {
    backgroundColor: colors.red,
    color: "white",
  },
  secondUnit: {
    backgroundColor: colors.red,
    color: "white",
  },
  timeSeparator: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 3,
  },
  timetitle: {
    fontSize: 17,
    padding: 10,
    paddingRight: 19,
    fontWeight: "bold",
  },
});

export default Countdown;
