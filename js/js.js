var doc = document
var obj = {

	logo: function () {
		var h1 = doc.createElement('h1');
		h1.className = "text-success lead";
		h1.innerHTML = "<strong>Тест по программированию</strong>";
		h1.style.textAlign = 'center';
		doc.body.appendChild(h1);
	},

	ul: function () {
		var form = doc.createElement('form');
		doc.body.appendChild(form);
		var ul = doc.createElement('ul');
		ul.className = 'text-info lead';
		ul.style.cssText = 'list-style:none;background-color:yellowgreen;';
		ul.innerHTML = '<li class="text-warning">1. Вопрос №1</li><li class="text-warning">2. Вопрос №2</li><li class="text-warning">3. Вопрос №3</li>';
		form.appendChild(ul);

		var qw1 = doc.querySelector('.text-warning');
		var subUl = doc.createElement('ul');
		subUl.style.listStyleType = 'none';
		subUl.innerHTML = '<li><input type="checkbox" id="check1"><label for="check1">1. Вариант ответа №1</label></li><li><input type="checkbox" id="check2"><label for="check2">2. Вариант ответа №2</label></li><li><input type="checkbox" id="check3"><label for="check3">3. Вариант ответа №3</label></li>';
		ul.children[0].appendChild(subUl);

		var qw2 = doc.querySelector('.text-warning');
		var subUl = doc.createElement('ul');
		subUl.style.listStyleType = 'none';
		subUl.innerHTML = '<li><input type="checkbox" id="check4"><label for="check4">1. Вариант ответа №1</label></li><li><input type="checkbox" id="check5"><label for="check5">2. Вариант ответа №2</label></li><li><input type="checkbox" id="check6"><label for="check6">3. Вариант ответа №3</label></li>';
		ul.children[1].appendChild(subUl);

		var qw3 = doc.querySelector('.text-warning');
		var subUl = doc.createElement('ul');
		subUl.style.listStyleType = 'none';
		subUl.innerHTML = '<li><input type="checkbox" id="check7"><label for="check7">1. Вариант ответа №1</label></li><li><input type="checkbox" id="check8"><label for="check8">2. Вариант ответа №2</label></li><li><input type="checkbox" id="check9"><label for="check9">3. Вариант ответа №3</label></li>';
		ul.children[2].appendChild(subUl);
	},

	button: function() {
		var but = doc.createElement('input');
		but.className = 'btn btn-primary';
		but.style.cssText = 'margin:0 auto;display:block;';
		but.setAttribute('type', 'submit');
		but.setAttribute('value', 'Проверить мои результаты');
		var form = doc.querySelector('form');
		form.appendChild(but);
	}
};

obj.logo();
obj.ul();
obj.button();


// li.style.cssText = "padding:100px;margin:200px;";