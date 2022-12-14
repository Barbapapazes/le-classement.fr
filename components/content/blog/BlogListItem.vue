<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
const { article } = defineProps<{ article: ParsedContent }>()

const datetime = useDateToISOString(article.datePublished)
const formattedDate = useDateToLocaleDateString(article.datePublished)

const colors = useColorsByPart(article.part)
const normalizedPart = useNormalizedPart(article.part)
</script>

<template>
  <article class="relative bg-white group rounded-xl before:rounded-xl p-5 gradient-border"
    :class="`gradient-border-${article.part}`">
    <NuxtLink :to="article._path" class="relative z-10 h-full flex flex-col gap-4">
      <div class="aspect-w-16 aspect-h-9 rounded-lg md:rounded overflow-hidden">
        <img class="h-full w-full object-cover group-hover:scale-[101%] transition-transform duration-200"
          v-if="article.image" :src="article.image.src" :alt="article.image.alt" loading="lazy">
      </div>
      <div>
        <span class="capitalize font-bold bg-clip-text text-transparent" :class="colors.backgroundGradient">{{
          normalizedPart
        }}</span>
      </div>
      <div class="flex-grow flex flex-col gap-2">
        <h3 class="text-xl text-black font-bold">{{ article.title }}</h3>
        <p class="text-base text-black">
          {{ article.description }}
        </p>
      </div>
      <time class="text-sm text-black font-light" :datetime="datetime">
        {{ formattedDate }}
      </time>
    </NuxtLink>
  </article>
</template>

<style>
.gradient-border-ceremonie-finale::before {
  @apply bg-ceremonie-finale
}

.gradient-border-tour-asso::before {
  @apply bg-tour-asso
}

.gradient-border-discovery::before {
  @apply bg-discovery
}

.gradient-border-classement::before {
  @apply bg-classement
}

.gradient-border-partenaires::before {
  @apply bg-partenaires
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1px;
  width: 100%;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.gradient-border:hover::before {
  opacity: 1;
}
</style>
