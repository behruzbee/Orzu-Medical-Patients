// pages/analyzes/ui/AnalyzesPage.tsx
import { AnalyzeCard } from "@/entities/analyzes";
import { Search } from "@/features/search";
import { PageHeader } from "@/widgets/header";
import { MobileNavbar } from "@/widgets/mobile-menu";
import { Container, Flex, Text } from "@mantine/core";
import { IconHeartbeat, IconDroplet } from "@tabler/icons-react";
import { useState } from "react";

const analyzes = [
  {
    id: 1,
    title: "ЭКГ",
    date: "15 янв 2024, 14:30",
    icon: <IconHeartbeat />,
    iconBg: "#FEF2F2",
    iconColor: "#EF4444",
    image: "https://therapy.odmu.edu.ua/images/ecg-course/ecg-complex-rus.jpg",
    params: [
      { label: "ЧСС", value: "72 уд/мин" },
      { label: "Ритм", value: "Синусовый" },
      { label: "Интервал QT", value: "420 мс" },
    ],
  },
  {
    id: 2,
    title: "Общий анализ крови",
    date: "12 янв 2024, 09:15",
    icon: <IconDroplet />,
    iconBg: "#EFF6FF",
    iconColor: "#3B82F6",
    params: [
      { label: "Гемоглобин", value: "145 г/л", status: "normal" as const },
      { label: "Лейкоциты", value: "12.5×10⁹/л", status: "high" as const },
      { label: "Тромбоциты", value: "280×10⁹/л" },
    ],
  },
  {
    id: 3,
    title: "Биохимия крови",
    date: "10 янв 2024, 11:00",
    icon: <IconDroplet />,
    iconBg: "#F0FDFA",
    iconColor: "#10B981",
    params: [
      { label: "Глюкоза", value: "5.2 ммоль/л", status: "normal" as const },
      { label: "Холестерин", value: "6.3 ммоль/л", status: "high" as const },
      { label: "Креатинин", value: "80 мкмоль/л" },
    ],
  },
  {
    id: 4,
    title: "Общий анализ мочи",
    date: "08 янв 2024, 16:45",
    icon: <IconDroplet />,
    iconBg: "#FEFCE8",
    iconColor: "#CA8A04",
    params: [
      { label: "Цвет", value: "Светло-жёлтый" },
      { label: "Белок", value: "Отсутствует", status: "normal" as const },
      { label: "Лейкоциты", value: "5 в п/з", status: "normal" as const },
    ],
  },
  {
    id: 5,
    title: "УЗИ брюшной полости",
    date: "05 янв 2024, 13:20",
    icon: <IconHeartbeat />,
    iconBg: "#FDF2F8",
    iconColor: "#DB2777",
    image:
      "https://www.ldck.ru/img/diagnostics/62f2bee5b9bec22dc1edc83589ace6bd.jpg",
    params: [
      { label: "Печень", value: "Без патологии" },
      { label: "Желчный пузырь", value: "Без камней" },
      { label: "Поджелудочная", value: "Норма" },
    ],
  },
];

export const AnalyzesPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Все");

  const filtered = analyzes.filter(
    (a) =>
      (filter === "Все" ||
        a.title.toLowerCase().includes(filter.toLowerCase())) &&
      a.title.toUpperCase().includes(query.toUpperCase())
  );

  return (
    <>
      <PageHeader header="Анализы" />
      <Container pb="110px" mih="100vh" bg="#F3F4F6" pt="4px">
        <Flex bdrs="16px" direction="column" mt="10px" p="8px 16px" bg="#fff">
          {/* Поиск и фильтры */}
          <Flex
            direction="column"
            pb="20px"
            styles={{ root: { borderBottom: "2px solid #F3F4F6" } }}
          >
            <Text size="14px" my="15px" c="#6B7280">
              Ваши результаты и история анализов
            </Text>
            <Search
              placeholder="Поиск по типу анализа..."
              withOptions
              options={["Все", "ЭКГ", "Крови", "УЗИ", "Мочи"]}
              value={query}
              onChange={setQuery}
              selectedOption={filter}
              onOptionChange={setFilter}
            />
          </Flex>

          {/* Список карточек */}
          <Flex pt="20px" direction="column" gap="16px">
            {filtered.map((analyze) => (
              <AnalyzeCard
                key={analyze.id}
                icon={analyze.icon}
                iconBg={analyze.iconBg}
                iconColor={analyze.iconColor}
                title={analyze.title}
                date={analyze.date}
                image={analyze.image}
                params={analyze.params}
                onView={() => console.log("Подробнее:", analyze.id)}
                onDownload={() => console.log("Скачать:", analyze.id)}
                onShare={() => console.log("Поделиться:", analyze.id)}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
      <MobileNavbar />
    </>
  );
};
