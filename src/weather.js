const apiData =
  // 20210309173640
  // https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=metric&appid=96163d593198b0ef807f2630c6d39143

  {
    lat: 33.4418,
    lon: -94.0377,
    timezone: "America/Chicago",
    timezone_offset: -21600,
    current: {
      dt: 1615307799,
      sunrise: 1615293248,
      sunset: 1615335557,
      temp: 17.83,
      feels_like: 12.84,
      pressure: 1028,
      humidity: 55,
      dew_point: 8.68,
      uvi: 5.63,
      clouds: 75,
      visibility: 10000,
      wind_speed: 6.69,
      wind_deg: 180,
      wind_gust: 10.29,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
    },
    daily: [
      {
        dt: 1615312800,
        sunrise: 1615293248,
        sunset: 1615335557,
        temp: {
          day: 18.79,
          min: 10.41,
          max: 19.22,
          night: 14.62,
          eve: 17.27,
          morn: 10.42,
        },
        feels_like: {
          day: 15.14,
          night: 11.96,
          eve: 15.9,
          morn: 7.9,
        },
        pressure: 1026,
        humidity: 65,
        dew_point: 12.08,
        wind_speed: 6.13,
        wind_deg: 189,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 91,
        pop: 0,
        uvi: 6.54,
      },
      {
        dt: 1615399200,
        sunrise: 1615379570,
        sunset: 1615422003,
        temp: {
          day: 20.29,
          min: 13.31,
          max: 22.97,
          night: 17.32,
          eve: 19.91,
          morn: 13.48,
        },
        feels_like: {
          day: 16.64,
          night: 15.47,
          eve: 18.42,
          morn: 11.41,
        },
        pressure: 1021,
        humidity: 69,
        dew_point: 14.64,
        wind_speed: 7.22,
        wind_deg: 186,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 99,
        pop: 0,
        uvi: 5.41,
      },
      {
        dt: 1615485600,
        sunrise: 1615465891,
        sunset: 1615508449,
        temp: {
          day: 19.28,
          min: 17.67,
          max: 20.51,
          night: 18.13,
          eve: 19.31,
          morn: 18.06,
        },
        feels_like: {
          day: 18.04,
          night: 17.62,
          eve: 19.22,
          morn: 17.37,
        },
        pressure: 1020,
        humidity: 84,
        dew_point: 16.68,
        wind_speed: 4.89,
        wind_deg: 186,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: 100,
        pop: 0.45,
        rain: 0.34,
        uvi: 1.43,
      },
      {
        dt: 1615572000,
        sunrise: 1615552212,
        sunset: 1615594895,
        temp: {
          day: 23.47,
          min: 15,
          max: 23.47,
          night: 19.04,
          eve: 21.09,
          morn: 15,
        },
        feels_like: {
          day: 22.46,
          night: 18.96,
          eve: 22.17,
          morn: 14.75,
        },
        pressure: 1023,
        humidity: 68,
        dew_point: 17.34,
        wind_speed: 4.97,
        wind_deg: 173,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: 92,
        pop: 0.88,
        rain: 1.03,
        uvi: 4.89,
      },
      {
        dt: 1615658400,
        sunrise: 1615638532,
        sunset: 1615681341,
        temp: {
          day: 23.59,
          min: 15.25,
          max: 24.11,
          night: 18.82,
          eve: 20.92,
          morn: 15.25,
        },
        feels_like: {
          day: 21.95,
          night: 17.48,
          eve: 20.47,
          morn: 15.06,
        },
        pressure: 1020,
        humidity: 62,
        dew_point: 16.05,
        wind_speed: 5.12,
        wind_deg: 158,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: 72,
        pop: 0.33,
        rain: 0.54,
        uvi: 5,
      },
      {
        dt: 1615744800,
        sunrise: 1615724852,
        sunset: 1615767786,
        temp: {
          day: 20.14,
          min: 9.53,
          max: 20.14,
          night: 9.53,
          eve: 10.43,
          morn: 16.79,
        },
        feels_like: {
          day: 17,
          night: 7.25,
          eve: 9.44,
          morn: 14.67,
        },
        pressure: 1012,
        humidity: 79,
        dew_point: 16.49,
        wind_speed: 7.53,
        wind_deg: 174,
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        clouds: 95,
        pop: 1,
        rain: 18.03,
        uvi: 5,
      },
      {
        dt: 1615831200,
        sunrise: 1615811172,
        sunset: 1615854231,
        temp: {
          day: 19.12,
          min: 7.49,
          max: 21.08,
          night: 13.94,
          eve: 16.86,
          morn: 7.93,
        },
        feels_like: {
          day: 15.15,
          night: 11.34,
          eve: 14.79,
          morn: 3.85,
        },
        pressure: 1008,
        humidity: 49,
        dew_point: 8.29,
        wind_speed: 5.06,
        wind_deg: 242,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: 0,
        pop: 0.38,
        uvi: 5,
      },
      {
        dt: 1615917600,
        sunrise: 1615897491,
        sunset: 1615940675,
        temp: {
          day: 23.43,
          min: 12.42,
          max: 25.62,
          night: 13.56,
          eve: 20.59,
          morn: 12.42,
        },
        feels_like: {
          day: 21.93,
          night: 8.48,
          eve: 19.16,
          morn: 9.36,
        },
        pressure: 1003,
        humidity: 66,
        dew_point: 16.93,
        wind_speed: 5.37,
        wind_deg: 221,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: 98,
        pop: 0.88,
        rain: 2.17,
        uvi: 5,
      },
    ],
  };

  export default apiData;