document.getElementById('task1Btn').addEventListener('click', () => {
    const blocks = document.querySelectorAll('.text-block');
    const list = document.getElementById('sentenceList');
    list.innerHTML = '';

    blocks.forEach((block, i) => {
        const li = document.createElement('li');
        li.textContent = `${i + 1}. ${block.textContent}`;
        li.style.cssText = 'background:#ecf0f1; padding:10px; margin:8px 0; border-left:5px solid #3498db; border-radius:6px;';
        list.appendChild(li);
    });
});