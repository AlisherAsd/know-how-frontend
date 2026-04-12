import { useScrollTop } from "@/shared/hooks/useScrollTop";
import ReactMarkdown from "react-markdown";

const text = `
## Запуск через Docker

### Требования

- [Docker](https://docs.docker.com/get-docker/) и Docker Compose (v2).

### Переменные окружения

Compose подставляет значения из **файв корне репозитория** (рядом с docker-compose.yml). Этот файл **не коммитьте**, если в нём секреты.


env
# Обязательно для функций AI (OpenRouter), иначе в образ фронта попадёт пустой ключ
VITE_OPENROUTER_API_KEY=sk-or-v1-ваш_ключ

# Опционально: если меняете порт или хост API, сначала поправьте docker-compose.yml
# (build.args.VITE_BASE_API_URL), затем пересоберите frontend



### Команды

Из корня репозитория:

bash
docker compose build
docker compose up


- Приложение (UI): [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:8080/items](http://localhost:8080/items) (корень 


Alisher Sharipov
`;

export const CoursePage = () => {
  useScrollTop();
  return (
    <div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};
