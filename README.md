# THPoliticalTimeline

This project was started as my creative project for CSE 154 Web Programming Class at the University of Washington in Spring, 2017.

When I was in school, it was difficult for me to see the big picture of the political events in Thailand. So I am developing this timeline in the hope that it would give anyone a broader view of Thai politics.  

## TODO:
- [ ] Add more events
- [ ] Add more details to the events including photos and dates
- [ ] Add a linear time scale 

## JSON data format
```
{
  "events": [
    {
      "start_date": {
        "year": "1932",
      },
      "text": {
        "headline": "Siamese Revolution of 1932",
        "body": "The change in political system from an absolute monarchy to a constitutional monarchy."
      },
      "group": "coup"
    },
    ...
  ]
}
```

*events* is a JSON array containing all the events.
In each event object, there are *start_date*, *text*, and *group* object.


