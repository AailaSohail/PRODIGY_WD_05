import React from "react";

const Weather = ({weatherData}) => {
  return (
    <div className="my-16">
      {weatherData.weather ? (
        <div className="flex">
          <div className=" main-weather bg-zinc-800 mx-16 text-white p-6 w-80 rounded-md relative h-40">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <p className="text-xl">
                  {weatherData.name},{weatherData.sys.country}
                </p>
                <p className="text-sm">{weatherData.weather[0].description}</p>
              </div>
              <div>
                <h1 className="text-6xl font-semibold">
                  {weatherData.main.temp.toFixed()}°C
                </h1>
              </div>

              <div className="absolute ml-40">
                <img
                  className="w-24"
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" highlights bg-zinc-800 mx-16 text-white p-6 w-80 rounded-md relative">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <p className="text-2xl text-center font-bold">
                  Weather Conditions
                </p>
                <table className="min-w-full text-left text-lg">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Feels Like</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.main.feels_like}°C</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Humidity</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.main.humidity} %</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Ground Level</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.main.grnd_level}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Pressure</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.main.pressure} mb</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Sea Level</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.main.sea_level}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Max Temp</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.main.temp_max}°C</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className=" wind bg-zinc-800 mx-16 text-white p-6 w-80 rounded-md relative">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <p className="text-2xl text-center font-bold">
                  Wind Conditions
                </p>
                <table className="min-w-full text-left text-lg">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Speed</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.wind.speed} KMPH</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Degree</td>
                      <td className="px-4 py-2">
                        <strong>{weatherData.wind.deg} °</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-800 text-white w-1/3 m-auto p-10 rounded-md">
          Nothing to show here
        </div>
      )}
    </div>
  );
};

export default Weather;
