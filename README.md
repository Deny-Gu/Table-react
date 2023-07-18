# Table-react
Задача была разработать приложение для отображения таблицы с данными.

Функционал:

1) Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике — по убыванию.
   Графическим элементом или текстовым сообщением указывается направление сортировки.
2) Клиентская пагинация: данные необходимо отображать постранично, максимум 50 элементов на страницу. Необходимо предоставить пользовательскую навигацию для перехода по страницам.
3) Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Перефильтрация осуществляется по нажатию на кнопку "Найти".
4) По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.
5) Данные в таблицу загружаются с сервера. Способ загрузки с сервера на ваш выбор.
6) Над таблицей присутсвует кнопка добавить, по нажатии на которую выпадает форма добавления ряда.
После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы.