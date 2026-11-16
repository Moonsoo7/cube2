// PROTOTYPE - NOT FOR PRODUCTION
// Question: (not set)
// Date: 2026-11-16
// 큐브게임의 튜닝 값. 게임은 tune.<이름>으로 매번 읽으므로, 슬라이더로 바꾸면 곧바로 적용된다.
// 방해·이동·잠금 큐브가 처음 나오는 때는 레벨(동물 10마리마다 1씩 오름, 1~10)이다. 줄어드는 제한 시간은 없다.
window.CONFIG = {
  // 없앨 큐브 수의 목표 = cubes_first + (동물 번호-1) × cubes_step. 뒤로 갈수록 큐브가 늘어 어려워진다
  cubes_first: { value: 12, min: 4, max: 40, step: 1 },
  cubes_step: { value: 1.1, min: 0, max: 3, step: 0.1 },
  grow_step: { value: 0.1, min: 0, max: 0.3, step: 0.01 },   // 한 번 깰 때마다 지도에서 자라는 비율(10번까지)
  zoo_walk_speed: { value: 1, min: 0, max: 3, step: 0.1 },    // 지도에서 동물이 돌아다니는 빠르기


  // 콤보: 이전 탭과의 간격(초)
  combo_window: { value: 0.5, min: 0.2, max: 1.5, step: 0.05 },
  lightning_window: { value: 0.2, min: 0.05, max: 0.5, step: 0.05 },
  combo_cap: { value: 10, min: 1, max: 30, step: 1 },        // 콤보 보너스가 더 늘지 않는 연속 횟수
  lightning_mult: { value: 3, min: 1, max: 6, step: 1 },     // 번개 콤보 보너스 배수
  combo_auto_pop: { value: 1, min: 0, max: 3, step: 0.5 },   // 콤보 숫자 × 이 값만큼 주변 남는 큐브가 자동으로 터짐
  combo_auto_max: { value: 10, min: 0, max: 30, step: 1 },   // 한 번에 자동으로 터지는 최대 개수

  // 방해 큐브
  blocker_from: { value: 4, min: 1, max: 10, step: 1 },      // 처음 나오는 레벨
  blocker_max: { value: 6, min: 0, max: 12, step: 1 },

  // 움직이는 큐브
  move_from: { value: 6, min: 1, max: 10, step: 1 },         // 처음 나오는 레벨
  move_interval: { value: 2.6, min: 0.5, max: 6, step: 0.1 }, // 첫 레벨의 이동 간격(초), 레벨마다 0.2초씩 짧아짐
  move_interval_min: { value: 0.9, min: 0.2, max: 3, step: 0.1 },

  // 잠긴 큐브
  lock_from: { value: 8, min: 1, max: 10, step: 1 },         // 처음 나오는 레벨
  lock_time: { value: 5, min: 1, max: 12, step: 0.5 },       // 잠겨 있는 시간(초)
  lock_interval: { value: 3.2, min: 1, max: 10, step: 0.1 }, // 새 잠금이 생기는 간격(초)

  // 새 방식 스테이지
  memory_show: { value: 5, min: 2, max: 12, step: 0.5 },      // 기억: 처음 정답을 보여 주는 시간(초)
  memory_peek: { value: 2, min: 0.5, max: 5, step: 0.5 },     // 기억: 하트 1개로 다시 보는 시간(초)
  regrow_interval: { value: 6.5, min: 1, max: 12, step: 0.5 }, // 재생: 다시 자라는 간격(초). 5초에서 30% 늘림
  bomb_count: { value: 3, min: 1, max: 8, step: 1 },          // 폭탄: 기본 폭탄 수(레벨 4마다 1개씩 늘어남)

  // 화면·소리
  answer_split: { value: 0.34, min: 0.2, max: 0.5, step: 0.01 }, // 위 정답 영역이 차지하는 비율
  music_volume: { value: 0.05, min: 0, max: 0.2, step: 0.01 },
  music_tempo: { value: 128, min: 90, max: 170, step: 2 },       // 배경음악 빠르기(BPM)
  unlock_all: { value: 0, min: 0, max: 1, step: 1 },             // 1이면 잠금 없이 모든 상징물을 열어 둔다(시험용)
};
