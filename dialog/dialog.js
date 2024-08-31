$(document).ready(function () {
    const dialogs = [];

    function showDialog(dialog) {
        $(dialog).addClass("show").removeClass("hide");
        dialog.showModal();
        dialogs.push(dialog);
    }

    function hideDialog(dialog) {
        $(dialog).addClass("hide").removeClass("show");
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        setTimeout(
            () => {
                dialog.close();
            },
            prefersReducedMotion ? 0 : 100
        );
    }

    $(`[data-action="open-dialog"]`).on("click", function () {
        const dialogId = $(this).attr("data-target");
        const dialog = $(`dialog[data-dialog="${dialogId}"]`).get(0);
        if (!dialog) return;
        showDialog(dialog);
    });

    $('[data-action="close-dialog"]').on("click", function () {
        const dialog = dialogs[dialogs.length - 1];
        if (!dialog) return;
        hideDialog(dialog);
        dialogs.pop();
    });
});
