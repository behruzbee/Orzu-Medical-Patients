import { useEffect, useState } from "react";
import { Flex, Text, Loader } from "@mantine/core";
import { IconCurrencyDollar } from "@tabler/icons-react";

type Currency = {
  Ccy: string;
  Rate: string;
};

export const ExchangeRates = () => {
  const [rates, setRates] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cbu.uz/ru/arkhiv-kursov-valyut/json/")
      .then((res) => res.json())
      .then((data) => {
        setRates(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const usd = rates.find((c) => c.Ccy === "USD");
  const eur = rates.find((c) => c.Ccy === "EUR");

  const formatRate = (rate?: string) => {
    if (!rate) return "-";
    return Number(rate).toLocaleString("ru-RU"); // 🔥 разделитель тысяч
  };

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
          root: {
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
          },
        }}
      >
        <IconCurrencyDollar color="#16A34A" style={{ marginRight: "8px" }} />
        Курс валют
      </Text>

      {loading ? (
        <Loader size="sm" mt="sm" />
      ) : (
        <Flex direction="column" mt="sm" gap={4}>
          <Text
            styles={{
              root: { lineHeight: "25px", fontWeight: 600, fontSize: "18px" },
            }}
          >
            USD: {formatRate(usd?.Rate)}
          </Text>
          <Text styles={{ root: { color: "#6B7280" } }}>
            EUR: {formatRate(eur?.Rate)}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
