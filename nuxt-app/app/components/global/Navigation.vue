<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'reka-ui'
import { ref } from 'vue'
import NavigationMenuListItem from './NavigationMenuListItem.vue'

const currentTrigger = ref('')
</script>

<template>
  <NavigationMenuRoot
    v-model="currentTrigger"
    class="relative z-[1] flex w-full justify-center"
  >
    <NavigationMenuList class="center m-0 flex list-none rounded-lg bg-white p-1 shadow-sm border">
      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          About
          <Icon
            icon="radix-icons:caret-down"
            class="text-green10 relative top-[1px] transition-transform duration-[150ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"
        >
          <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
            <li class="row-span-3 grid focus:shadow-green7 bg-stone-800 flex h-full w-full select-none flex-col justify-center rounded-lg p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]">
              <NavigationMenuLink as-child>
                <img
                  class="w-16"
                  src="/images/hats/silk.webp"
                >
                <div class="mt-2 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">HAT Inc.</div>
                <p class="text-mauve4 text-[14px] leading-[1.3]"></p>
              </NavigationMenuLink>
            </li>
            <NavigationMenuListItem
              title="HATについて"
            >
              株式会社HATは、千葉市美浜区にあるシステム開発を行う企業です。
            </NavigationMenuListItem>
            <NavigationMenuListItem
              title="お問い合わせ"
            >
              現在新規の受付を停止しております。お手数ですが直接メール等にてご連絡をお願いいたします。
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-sm font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          Status
          <Icon
            icon="radix-icons:caret-down"
            class="text-green10 relative top-[1px] transition-transform duration-[150ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
          <ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            <NavigationMenuListItem
              title="サイトの状態"
            >
              現在5年ぶりにサイトを改修中です。公開までもうしばらくお待ちください。
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-sm font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          href="https://github.com/hathq/website"
        >
          GitHub
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator
        class="absolute data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full w-[--reka-navigation-menu-indicator-size] translate-x-[--reka-navigation-menu-indicator-position] mt-[1px] z-[100] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
      >
        <div class="relative top-[70%] h-[12px] w-[12px] rotate-[45deg] bg-white border" />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center ">
      <NavigationMenuViewport
        class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--reka-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-xl bg-white transition-[width,_height] duration-300 sm:w-[var(--reka-navigation-menu-viewport-width)] border shadow-sm"
      />
    </div>
  </NavigationMenuRoot>
</template>
