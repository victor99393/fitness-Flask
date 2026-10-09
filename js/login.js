document.addEventListener("DOMContentLoaded", function () {

    const senha = document.getElementById("senha");
    const togglePassword = document.getElementById("toggle-password");

    const eyeOpen = document.getElementById("eye-open");
    const eyeClosed = document.getElementById("eye-closed");

    const capsWarning = document.getElementById("caps-warning");


    /* ========================================
       MOSTRAR / OCULTAR SENHA
    ======================================== */

    if (senha && togglePassword) {

        togglePassword.addEventListener("click", function (event) {

            event.preventDefault();

            if (senha.type === "password") {

                // MOSTRAR SENHA
                senha.type = "text";

                if (eyeOpen) {
                    eyeOpen.style.display = "none";
                }

                if (eyeClosed) {
                    eyeClosed.style.display = "block";
                }

                togglePassword.setAttribute(
                    "aria-label",
                    "Ocultar senha"
                );

                togglePassword.setAttribute(
                    "title",
                    "Ocultar senha"
                );

            } else {

                // ESCONDER SENHA
                senha.type = "password";

                if (eyeOpen) {
                    eyeOpen.style.display = "block";
                }

                if (eyeClosed) {
                    eyeClosed.style.display = "none";
                }

                togglePassword.setAttribute(
                    "aria-label",
                    "Mostrar senha"
                );

                togglePassword.setAttribute(
                    "title",
                    "Mostrar senha"
                );

            }

        });

    }


    /* ========================================
       CAPS LOCK
    ======================================== */

    if (senha && capsWarning) {

        function verificarCapsLock(event) {

            if (
                event.getModifierState &&
                event.getModifierState("CapsLock")
            ) {

                capsWarning.hidden = false;

            } else {

                capsWarning.hidden = true;

            }

        }

        senha.addEventListener(
            "keydown",
            verificarCapsLock
        );

        senha.addEventListener(
            "keyup",
            verificarCapsLock
        );

        senha.addEventListener(
            "focus",
            verificarCapsLock
        );

        senha.addEventListener(
            "blur",
            function () {
                capsWarning.hidden = true;
            }
        );

    }

});