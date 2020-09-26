 
            var rIndex,
                table = document.getElementById("table");
            
            // Проверка заполнения полей
            function checkEmptyInput()
            {
                var isEmpty = false,
                    id = document.getElementById("id").value,
                    name = document.getElementById("name").value,
                    date = document.getElementById("date").value;
            
                if(id === ""){
                    alert("Заполните поле ID");
                    isEmpty = true;
                }
                else if(name === ""){
                    alert("Заполните поле Имя");
                    isEmpty = true;
                }
                else if(date === ""){
                    alert("Выберите Дату");
                    isEmpty = true;
                }
                return isEmpty;
            }

            
            
            // Добавление строки
            function addHtmlTableRow()
            {
                // получение таблицы по id
                // создание новой строки и ячеек
                // получение значения из входного текста
                // установить значение в ячейку строки
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    id = document.getElementById("id").value,
                    name = document.getElementById("name").value,
                    date = document.getElementById("date").value;
            
                cell1.innerHTML = id;
                cell2.innerHTML = name;
                cell3.innerHTML = date;
                //вызвать функцию, для установки события для новой строки
                selectedRowToInput();
            }
            }
            
            // Отображение выбранных данных данной строки в входных строках
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // Запрос индекса данной строки
                      rIndex = this.rowIndex;
                      document.getElementById("id").value = this.cells[0].innerHTML;
                      document.getElementById("name").value = this.cells[1].innerHTML;
                      document.getElementById("date").value = this.cells[2].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var id = document.getElementById("id").value,
                    name = document.getElementById("name").value,
                    date = document.getElementById("date").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = id;
                table.rows[rIndex].cells[1].innerHTML = name;
                table.rows[rIndex].cells[2].innerHTML = date;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // Очистить вводимый текст в данной строке
                document.getElementById("id").value = "";
                document.getElementById("name").value = "";
                document.getElementById("date").value = "";
            }

            //Фильтрация и поиск
                     $('.table-filters input').on('input', function () {
                        filterTable($(this).parents('table'));
                                    });

                        function filterTable($table) {
                    var $filters = $table.find('.table-filters td');
                    var $rows = $table.find('.table-data');
                            $rows.each(function (rowIndex) {
                    var valid = true;
                            $(this).find('td').each(function (colIndex) {
                             if ($filters.eq(colIndex).find('input').val()) {
                              if ($(this).html().toLowerCase().indexOf(
                            $filters.eq(colIndex).find('input').val().toLowerCase()) == -1) {
                                valid = valid && false;
                             }
                             }
                             });
                                if (valid === true) {
                               $(this).css('display', '');
                             } else {
                               $(this).css('display', 'none');
        }
    });
}
