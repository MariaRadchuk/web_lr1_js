class Animal {
    constructor(nickname, height, k) {
        this.nickname = nickname;
        this.height = height;
        this.k = k;
    }

    getWeight() {
        return this.k * Math.pow(this.height, 3);
    }

    toString() {
        return `Тварина: ${this.nickname}, Ріст: ${this.height} м, Вага: ${this.getWeight().toFixed(2)} кг`;
    }
}

class Cat extends Animal {
    constructor(nickname, height, breed) {
        super(nickname, height, 15);
        this.breed = breed;
    }

    getWeight() {
        return super.getWeight() * 1000; // в грамах
    }

    toString() {
        return `Кішка: ${this.nickname}, Порода: ${this.breed}, Ріст: ${this.height} м, Вага: ${this.getWeight().toFixed(0)} г`;
    }
}

document.getElementById('runTaskBtn').addEventListener('click', () => {
    const output = document.getElementById('resultOutput');
    output.innerHTML = '';

    const animals = [
        new Animal('Їжачок', 0.2, 20),
        new Cat('Мурка', 0.4, 'Сіамська'),
        new Cat('Барсик', 0.5, 'Перська'),
        new Animal('Песик', 0.6, 18)
    ];

    animals.forEach(animal => {
        const div = document.createElement('div');
        div.className = 'animal-item';
        if (animal instanceof Cat) div.classList.add('cat-item');
        div.textContent = animal.toString();
        output.appendChild(div);
    });
});