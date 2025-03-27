document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.elementor-form');

    forms.forEach(form => {
        const fileInputs = form.querySelectorAll('input[type="file"][multiple]');

        fileInputs.forEach(fileInput => {
            const fileListDisplay = document.createElement('div');
            fileListDisplay.classList.add('uploaded-files-wrapper');
            fileInput.parentNode.appendChild(fileListDisplay);

            const dataTransfer = new DataTransfer();

            fileInput.addEventListener('change', (event) => {
                for (const file of event.target.files) {
                    if (![...dataTransfer.files].some(f => f.name === file.name && f.size === file.size)) {
                        dataTransfer.items.add(file);
                    }
                }

                fileInput.files = dataTransfer.files;
                renderFileList();
            });

            function renderFileList() {
                fileListDisplay.innerHTML = '';

                [...dataTransfer.files].forEach((file, index) => {
                    const fileItem = document.createElement('div');
                    fileItem.style.cssText = `
                        display: inline-flex;
                        align-items: center;
                        padding: 6px 10px;
                        margin: 5px;
                        background-color: #f5f5f5;
                        border-radius: 4px;
                        border: 1px solid #ddd;
                        font-size: 14px;
                    `;

                    fileItem.innerHTML = `
                        <span>${file.name}</span>
                        <span style="cursor:pointer; color:red; margin-left:8px;">&times;</span>
                    `;

                    fileItem.querySelector('span:last-child').addEventListener('click', () => {
                        removeFile(index);
                    });

                    fileListDisplay.appendChild(fileItem);
                });
            }

            function removeFile(index) {
                dataTransfer.items.remove(index);
                fileInput.files = dataTransfer.files;
                renderFileList();
            }
        });
    });
});
