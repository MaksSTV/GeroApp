# GeroApp

## Чтобы запустить весь проект необходимо:

1. Склонировать проект.
2. Запустить Docker Desktop.
3. Запустить в папке с проектом PowerShell или через cmd запустить wsl и переместиться в папку проекта.
4. Выполнить команду `docker-compose build`.
5. Выполнить команду `docker-compose up -d`.

## Важно
1. Если бэкенд выдает ошибку связанную с базой данных, то необходимо почистить Volumes в Docker Desktop.
2. После удаления контейнера с проектом также необходимо удалить данные из Volumes, чтобы не возникало ошибки, которая описана в предыдущем пункте.

## Чтобы запустить веб приложение:
1. Запустить проект 
2. Открыть порт контейнера **GeroFront**.

## Чтобы запустить сервер:
1. Запустить проект 
2. Открыть порт контейнера **GeroAPI**.
    * http://localhost:8080/item?amount=10
    * http://localhost:8080/item?amount=10&start=50

- amount - сколько элементов хотим получить.
- start - c какого элемента хотим начать.

