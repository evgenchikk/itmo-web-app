# Описание сущностей базы данных
## Users
Пользователи
- id (primary key, int) -- id пользователя
- name (string) -- имя пользователя
- surname (string) -- фамилия пользователя
- login (string) -- никнейм для регистрации
- isOnline (boolean) -- статус онлайн/нет
- passwordId (int) -- id пароля в таблице passwords

## Passwords
Пароли
> Отношение 1:1 пароль:пользователь
- id (primary key, int) -- id пароля
- password (string) -- пароль (хешированный ?)

## Comments
Комментарии
> Отношение *:1 комментарии:пользователь
- id (primary key, int) -- id пароля
- comment (string) -- содержание комментария
- userId -- id пользователя-автора