/* global gapi */

import React, {useState, useEffect} from "react";
import EventCard from "../components/EventCard";


const GOOGLE_API_KEY = "AIzaSyAtHz02Yzb-TGWflfO9YLXH7pwXX_oKDEQ";

function Calendar(){
    //setup useState to equal events and have a function that can change the state of events
    const [events, setEvents] = useState([])

    useEffect(() => {
        console.log('mounted')
        //call getEvents function to pull calendar data
        getEvents()
    }, [])

    const getEvents = () => {
        //this function is called on page load--ie gapi.load('client', START)
        function start() {
            gapi.client.init({
            'apiKey': GOOGLE_API_KEY,
            // Array of API discovery doc URLs for APIs used by the quickstart
            'DISCOVERY_DOCS': ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
            }).then(function() {
            //taking the API from above and allowing the path below to access the events in prettyawesomepractice007@gmail.com public calendar
            return gapi.client.request({
                'path': `https://www.googleapis.com/calendar/v3/calendars/prettyawesomepractice007@gmail.com/events`,
            })
            }).then( (response) => {
            //define a variable res that only pulls the events from the response
            let res = response.result.items
            console.log(res)
            //setEvents redefines events to equal the array res
            setEvents(res)

            }, 
            //i think this is a catch but not completely sure
            function(reason) {
            console.log(reason);
            });
        }
        //once getEvents is called, it will initially load the client and the function start() will be called
        gapi.load('client', start)
    };
  return (
    <>
      {events.map((event) => {
      return(<EventCard 
      title = {event.summary}
      start = {event.start.dateTime}
      end = {event.end.dateTime}
      description = {event.description}
      location = {event.location}
      key = {event.id}
      />
      )}
      )}
    </>
  );
}

export default Calendar;