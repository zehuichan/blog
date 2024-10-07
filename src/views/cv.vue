<template>
  <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <section class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{{ RESUME_DATA.name }}</h1>
          <p class="max-w-md text-pretty text-sm text-muted-foreground">
            {{ RESUME_DATA.about }}
          </p>
          <p class="max-w-md items-center text-pretty text-sm text-muted-foreground">
            <span class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline">
            9年前端，本科
            </span>
          </p>
          <div class="flex pt-1 text-sm text-muted-foreground print:hidden">
            <el-button v-if="RESUME_DATA.contact.email" tag="a" text bg :href="`mailto:${RESUME_DATA.contact.email}`">
              <icon-park type="mail" />
            </el-button>
            <el-button v-if="RESUME_DATA.contact.tel" tag="a" text bg :href="`tel:${RESUME_DATA.contact.tel}`">
              <icon-park type="phone" />
            </el-button>
            <el-button v-if="RESUME_DATA.contact.github" tag="a" text bg :href="`${RESUME_DATA.contact.github}`">
              <icon-park type="github" />
            </el-button>
          </div>
          <div class="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex">
            <a v-if="RESUME_DATA.contact.email" :href="`mailto:${RESUME_DATA.contact.email}`">
              <span class="underline">{{ RESUME_DATA.contact.email }}</span>
            </a>
            <a v-if="RESUME_DATA.contact.tel" :href="`tel:${RESUME_DATA.contact.tel}`">
              <span class="underline">{{ RESUME_DATA.contact.tel }}</span>
            </a>
          </div>
        </div>
        <div class="relative flex shrink-0 overflow-hidden rounded-xl size-28">
          <img class="aspect-square h-full w-full" :src="RESUME_DATA.avatarUrl" alt="">
        </div>
      </div>
      <Section>
        <h2 class="text-xl font-bold">关于我</h2>
        <div class="text-pretty text-sm text-muted-foreground">
          <renderer :render="RESUME_DATA.summary" />
        </div>
      </Section>

      <Section>
        <h2 class="text-xl font-bold">工作经历</h2>
        <Card v-for="work in RESUME_DATA.work">
          <CardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold">
                {{ work.company }}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ work.start }} - {{ work.end }}
              </div>
            </div>
            <h4 class="text-sm">
              {{ work.title }}
            </h4>
          </CardHeader>
          <CardContent class="mt-2 text-pretty text-sm text-muted-foreground">
            <renderer :render="work.description" />
          </CardContent>
        </Card>
      </Section>

      <Section class="scroll-mb-16">
        <h2 class="text-xl font-bold">项目经历</h2>
        <Card v-for="project in RESUME_DATA.projects" bg>
          <CardHeader>
            <CardTitle>
              <div class="flex items-center justify-between gap-x-2 text-base">
                <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold">
                  {{ project.title }}
                </h3>
                <div class="text-sm tabular-nums text-gray-500 fw-400">
                  {{ project.start }} - {{ project.end }}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 class="mt-2 text-sm text-card-foreground">项目描述：</h4>
            <div class="text-pretty mt-2">
              <renderer v-if="isFunction(project.description)" :render="project.description" />
              <template v-else>{{ project.description }}</template>
            </div>
            <h4 class="mt-2 text-sm text-card-foreground">工作职责：</h4>
            <div class="text-pretty mt-2">
              <renderer :render="project.responsibilities" />
            </div>
            <h4 class="mt-2 text-sm text-card-foreground">技术栈：</h4>
            <div class="mt-2 flex flex-wrap gap-1.5">
              <Tag v-for="tag in project.techStack">{{ tag }}</Tag>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <h2 class="text-xl font-bold">教育经历</h2>
        <Card v-for="education in RESUME_DATA.education">
          <CardHeader>
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="font-semibold leading-none">
                {{ education.school }}
              </h3>
              <div class="text-sm tabular-nums text-gray-500">
                {{ education.start }} - {{ education.end }}
              </div>
            </div>
          </CardHeader>
          <CardContent class="mt-2">{{ education.degree }}</CardContent>
        </Card>
      </Section>

      <Section>
        <h2 class="text-xl font-bold">开源项目</h2>
        <div class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card v-for="repository in RESUME_DATA.repository" class="repository border border-muted p-3">
            <div class="space-y-1">
              <CardHeader>
                <a :href="repository.link" target="_blank" class="inline-flex items-center gap-1 hover:underline">
                  {{ repository.title }}
                  <span class="size-1 rounded-full bg-green-500"></span>
                </a>
                <div class="hidden font-mono text-xs underline print:visible">
                  {{ repository.link?.replace('https://', '').replace('www.', '').replace('/', '') }}
                </div>
                <CardDescription class="font-mono text-xs">
                  {{ repository.description }}
                </CardDescription>
              </CardHeader>
              <CardContent class="mt-auto flex">
                <div class="mt-2 flex flex-wrap gap-1">
                  <Tag v-for="tag in repository.techStack" light>{{ tag }}</Tag>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 class="text-xl font-bold">致谢</h2>
        <div class="mt-2 text-sm text-card-foreground">感谢您花时间阅读我的简历，期待能有机会和您共事</div>
      </Section>
    </section>
  </main>
</template>

<script setup>
import { RESUME_DATA } from '@/data/resume-data.jsx'
import { isFunction } from '@vue/shared'
import Section from '@/components/Section/src/Section.vue'
</script>

<style scoped>

</style>
