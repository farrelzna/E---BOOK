<template>
    <div class="card custom-card me-4 p-3 w-100">
        <div class="card-header d-flex align-items-center border-bottom">
            <span class="avatar text-bg-primary avatar-lg fs-5 p-1 rounded-circle">{{ Array.from(book.title)[0] }}</span>
            <div class="ms-3">
                <h6 class="mb-0 fs-sm">{{ book.title }}</h6>
                <span class="text-muted fs-sm">{{ book.author }}</span>
            </div>
        </div>

        <div class="card-body">
            <p class="fs-sm mb-3">
                {{ book.synopsis }}
            </p>

            <div class="d-flex justify-content-between align-items-center gap-3">

                <!-- Downloads Section -->
                <div class="d-flex align-items-center">
                    <i class="fa fa-download"></i>
                    <span class="fs-sm text-muted ms-2">1.2M</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponents",

    props: {
        book: {
            type: Object,
            required: true,
        },
    },
};
</script>
