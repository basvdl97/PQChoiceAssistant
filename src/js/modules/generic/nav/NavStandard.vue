<template>
    <div class="relative w-full">
        <div class="w-full bg-primary px-8 py-4 flex justify-between items-end">
            <!-- Logo img @/assets/nav-icon.png -->
            <div class="absolute w-24 h-24 bg-white rounded-full border-[3px] border-white top-5">
                <img src="@/assets/nav-icon.png" alt="Logo" />
            </div>

            <!-- title -->
            <div class="ml-28 w-fit">
                <button @click="$router.push({ name: 'HomePageRoute' })" class="text-white">
                    <h1 class="text-2xl font-bold">PQChoiceAssistant</h1>
                </button>
            </div>

            <!-- menu items -->
            <div class="flex w-fit gap-6 mr-2">
                <div v-for="menu_item in menu_items" :key="menu_item.value">
                    <button @click="handleClickNavItem(menu_item)" class="text-white">
                        <h2 :class="{'font-bold underline': selected_menu_item === menu_item.value}">
                            {{ menu_item.label }}
                        </h2>
                    </button>
                </div>

                <!-- language buttons -->
                <div class="flex  gap-1">
                    <button @click="this.language.current = 'NL'" class="text-white p-1" :class="{'border rounded-full border-white': this.language.current === 'NL'}">
                        <img src="@/assets/dutch-flag.png" alt="NL" class="w-4 h-4" />
                    </button>
                    <button @click="this.language.current = 'EN'" class="text-white p-1" :class="{'border rounded-full border-white': this.language.current === 'EN'}">
                        <img src="@/assets/english-flag.png" alt="EN" class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        menu_items: {
            type: Array,
            required: true,
        },
        selected_menu_item: {
            type: String,
            required: true,
        },
    },
    emits: ['handle-click-nav-item'],
    methods: {
        handleClickNavItem(menu_item) {
            this.$emit('handle-click-nav-item', menu_item);
        },
    },
    inject: ['language'],
}
</script>
