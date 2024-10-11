<template>
    <div class="hidden platform-viewport-breakpoint:block pb-12" >
        <ChoiceAssistantStandard 
            :title_text="title_text"
            :questions="questions"
            :current_question="current_question"
        />
    </div>
    <div class="block platform-viewport-breakpoint:hidden" >
        <ChoiceAssistantMobile 
            :title_text="title_text"
            :questions="questions"
            :current_question="current_question"
        />
    </div>
</template>

<script>

    import Choice

    export default {
        
    }
</script>