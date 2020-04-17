<template>
    <div
            class="flip-card"
            :class="{active: active}"
            @dragstart.prevent
            @drop.prevent
    >
        <div class="flip-card-inner elevation-5">
            <div class="flip-card-front">
                <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 0 24 24" width="100">
                    <path fill="grey" d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
                </svg>
            </div>
            <div class="flip-card-back">
                <img src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                     alt="Avatar" style="width:200px;height:200px;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MemoryTile",
        props: {
            active: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style scoped lang="scss">
    $size: 200px;

    .flip-card {
        background-color: transparent;
        width: $size;
        height: $size;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }

    .flip-card.active .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flip-card-back {
        transform: rotateY(180deg);
    }
</style>