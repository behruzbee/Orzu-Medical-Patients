import { useEffect, useState } from "react";
import { Flex, Text, Loader } from "@mantine/core";
import { IconTemperatureSnow } from "@tabler/icons-react";

type WeatherData = {
  main: { temp: number };
  weather: { description: string }[];
};

export const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Дефолтные данные на случай ошибок
  const fallbackWeather: WeatherData = {
    main: { temp: 25 },
    weather: [{ description: "Ясно (данные оффлайн)" }],
  };

  const fetchWeather = (lat: number, lon: number) => {
    const API_KEY = "86329a46bec8b0f36926af8f0af81225"; // 🔑 твой ключ
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== 200) {
          setWeather(fallbackWeather);
        } else {
          setWeather(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setWeather(fallbackWeather);
        setLoading(false);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      () => {
        fetchWeather(41.3111, 69.2797);
      }
    );
  }, []);

  return (
    <Flex
      direction="column"
      p="19px 16px"
      bg="white"
      w="100%"
      style={{
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <Text
        styles={{
          root: { display: "flex", alignItems: "center", fontWeight: 500 },
        }}
      >
        <IconTemperatureSnow color="#2563EB" style={{ marginRight: "8px" }} />
        Погода
      </Text>

      {loading ? (
        <Loader size="sm" mt="sm" />
      ) : weather ? (
        <Flex direction="column" mt="sm">
          <Text
            styles={{
              root: { lineHeight: "25px", fontWeight: 600, fontSize: "22px" },
            }}
          >
            {Math.ceil(weather.main.temp + 1)} °C
          </Text>
          <Text
            styles={{ root: { color: "#6B7280", textTransform: "capitalize" } }}
          >
            {weather.weather[0].description}
          </Text>
        </Flex>
      ) : (
        <Text c="red" mt="sm">
          Ошибка загрузки погоды
        </Text>
      )}
    </Flex>
  );
};
