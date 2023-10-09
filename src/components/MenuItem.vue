<template>
    <div class="menu-item" :class="{ expanded: expanded }">
        <div 
            class="label"
            @click="toggleMenu()"
        >
            <div class="left">
                <i v-if="icon" class="material-icons">{{ icon }}</i>
                <span>{{ label }}</span>
            </div>
            <div v-if="data" class="right">
                <i class="material-icons expand" :class="{ expanded: expanded }">expand_more</i>
            </div>
        </div>
        <div 
            v-show="showChildren"
            class="items-container"
            ref="container"
            :style="{ height: containerHeight }"
        >

        <!-- Recurse through children -->
            <ul>
                <li class="nav-item"
                    v-if="data"
                    v-for="(childItem, index) in data"
                    :key="index"
                    :label="childItem.label"
                    :icon="childItem.icon"
                    :depth="depth + 1"
                    :data="childItem.children"
                    :path="childItem.path"
                >
                    <router-link
                        :to="childItem.path"
                        class="nav-link"
                    >
                        {{ childItem.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "menu-item",
    data: () => ({
        showChildren: false,
        expanded: false,
        containerHeight: 0,
    }),
    props: {
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        depth: {
            type: Number,
            required: true
        },
        data: {
            type: Array
        },
        path: {
            type: String
        }
    },
    methods: {
        toggleMenu() {
            this.expanded = !this.expanded;
            // If menu closed
            if (!this.showChildren) {
                this.showChildren = true;
                this.$nextTick(() => {
                    // Get the height of what's inside the container to start the animation
                    this.containerHeight = this.$refs["container"].scrollHeight + "px";
                    setTimeout(() => {
                        this.containerHeight = "fit-content";
                        // We set the overflow of the container to visible at the end of the
                        // animation
                        this.$refs["container"].style.overflow = "visible";
                    }, 300)
                })
            } else {
                this.containerHeight = this.$refs["container"].scrollHeight + "px";
                // We set the overflow of the container to hidden to avoid text overlapping
                // during the animation
                this.$refs["container"].style.overflow = "hidden";
                // This trick allows us to play the animation when the CSS is all well set
                setTimeout(() => {
                    this.containerHeight = 0 + "px";
                }, 10)
                setTimeout(() => {
                    this.showChildren = false;
                }, 300)
            }
            
        }
    }
}
</script>

<style scoped>
.menu-item {
    position: relative;
    width: 100%;
    .label {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        white-space: nowrap;
        user-select: none;
        height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #800000;
        transition: all .3s ease;
        > div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        i {
            font-size: 20px;
            transition: all .3s ease;
        }
        
    }
}

.expand {
    font-size: 16px;
}
.right .expanded {
    transform: rotate(180deg);
}

.items-container {
    width: 100%;
    overflow: hidden;
    transition: height .3s ease;
}

.label:hover {
    background-color: #deedff;
}

.router-link-active {
    text-decoration: none;
    font-weight: bold;
    text-shadow: 1px 1px 5px black;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul li {
    width: 100%;
    padding: 10px;
    padding-left: 20%;
    color: #800000;
}

ul li:hover {
    background-color: #deedff;
    cursor: pointer;
}
</style>