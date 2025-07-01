<template>
  <div class="check-order">
    <div class="order-progress">
      <div class="progress-label" v-bind:class="{ active: step >= 1 }">
        STEP1<br />確認訂單
      </div>
      <div class="progress-label" v-bind:class="{ active: step >= 2 }">
        STEP2<br />建立訂單
      </div>
      <div class="progress-label" v-bind:class="{ active: step >= 3 }">
        STEP3<br />完成訂單
      </div>
    </div>

    <!-- 顯示購物車商品 -->
    <div v-if="step === 1" class="order-confirm">
      <!-- 購物車資料 -->
      <div class="order-info">
        <div class="cart-info">
          <h3>購物車資訊</h3>
          <p v-if="cart.length === 0" class="warning-text">
            請加入商品才能繼續結帳。
          </p>
          <div class="order-list">
            <ul class="order-items">
              <li
                v-for="(item, index) in cart"
                v-bind:key="item.id"
                class="order-item"
              >
                <div class="basic-info">
                  <img v-bind:src="item.image" class="item-img" />
                  <h5>{{ item.name }}</h5>
                </div>
                <span class="item-info">
                  {{ item.price }} x {{ item.quantity }} =
                  {{ item.price * item.quantity }} NTD
                  <div class="quantity-controls">
                    <button
                      class="p-adj"
                      v-on:click="updateQuantity(index, item.quantity - 1)"
                    >
                      ◀
                    </button>
                    <span>{{ item.quantity }}</span>
                    <button
                      class="p-adj"
                      v-on:click="updateQuantity(index, item.quantity + 1)"
                    >
                      ▶
                    </button>
                    <button
                      class="remove-button"
                      v-on:click="removeFromCart(index)"
                    >
                      移除
                    </button>
                  </div>
                </span>
              </li>
            </ul>
          </div>
          <h3 class="order-total">總計：{{ totalPrice }} NTD</h3>
        </div>
        <!-- 訂購人資料 -->
        <div class="recipient-info">
          <h3>請輸入訂購人資訊</h3>
          <form
            v-on:submit.prevent="submitOrder"
            ref="orderForm"
            class="order-form"
            novalidate
          >
            <div class="form-row">
              <label for="email"><span>*</span>信箱</label>
              <input
                type="text"
                id="email"
                v-model="user.email"
                placeholder="請輸入Email"
                required
              />
              <span v-if="errors.email" class="error-text">{{
                errors.email
              }}</span>
            </div>
            <div class="form-row">
              <label for="name"><span>*</span>姓名</label>
              <input
                type="text"
                id="name"
                v-model="user.name"
                placeholder="請輸入姓名"
                required
              />
            </div>
            <div class="form-row">
              <label for="address"><span>*</span>地址</label>
              <input
                type="text"
                id="address"
                v-model="user.address"
                placeholder="請輸入地址"
                required
              />
            </div>
            <div class="form-row">
              <label for="phone"><span>*</span>聯絡電話</label>
              <input
                type="text"
                id="phone"
                v-model="user.phone"
                placeholder="請輸入手機號碼"
                required
              />
              <span v-if="errors.phone" class="error-text">{{
                errors.phone
              }}</span>
            </div>
            <div class="form-row">
              <label for="note">備註</label>
              <textarea
                id="note"
                rows="10"
                v-model="user.note"
                placeholder="請輸入其他訂單備註需求"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div class="button-group">
        <button
          @click="validateForm"
          :disabled="cart.length === 0"
          class="btn-primary"
        >
          下一步
        </button>
      </div>
    </div>

    <!-- 用戶資料輸入 -->
    <div v-if="step === 2" class="order-create">
      <div class="order-create-info">
        <div class="cart-info-check">
          <h3>您的購物車資訊</h3>
          <div class="order-list">
            <ul class="order-items">
              <li v-for="item in cart" v-bind:key="item.id" class="order-item">
                <div class="basic-info">
                  <img v-bind:src="item.image" class="item-img" />
                  <h5>{{ item.name }}</h5>
                </div>
                <span class="item-info">
                  {{ item.price }} x {{ item.quantity }} =
                  {{ item.price * item.quantity }} NTD
                </span>
              </li>
            </ul>
          </div>
          <h3 class="order-total">總計：{{ totalPrice }} NTD</h3>
        </div>
        <div class="recipient-info-check">
          <h3>您的訂購人資訊</h3>
          <div class="form-row">
            <label for="email"><span>*</span>信箱</label>
            {{ user.email }}
          </div>
          <div class="form-row">
            <label for="name"><span>*</span>姓名</label>
            {{ user.name }}
          </div>
          <div class="form-row">
            <label for="address"><span>*</span>地址</label>
            {{ user.address }}
          </div>
          <div class="form-row">
            <label for="phone"><span>*</span>聯絡電話</label>
            {{ user.phone }}
          </div>
          <div class="form-row">
            <label for="note">備註</label>
            {{ user.note }}
          </div>
        </div>
      </div>
      <div class="button-group">
        <button class="btn-primary" v-on:click="prevStep">上一步</button>
        <button v-on:click="orderestablish" class="btn-primary">下一步</button>
      </div>
    </div>

    <!-- 訂單完成 -->
    <div v-if="step === 3" class="order-complete">
      <div class="complete-info">
        <h2>訂單已完成！</h2>
        <p>
          感謝您的購買，您的訂單{{
            order.orderNumber
          }}已經建立完成！我們會儘快處理您的訂單並發送到您的地址。
        </p>
      </div>
      <div class="button-group">
        <button class="btn-primary" v-on:click="prevStep">上一步</button>
        <button class="btn-primary" v-on:click="resetOrder">了解返回</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

// Vuex
const store = useStore()
const cart = computed(() => store.state.cart)
const totalPrice = computed(() => store.getters.totalPrice)
const updateCart = (newCart) => store.commit("updateCart", newCart)

// Router
const router = useRouter()

// 狀態與資料
const step = ref(1)
const user = ref({
  email: "",
  name: "",
  address: "",
  phone: "",
  note: "",
});

const order = ref({})
const errors = ref({})
const orderForm = ref(null)

// 方法
function updateQuantity(index, newQuantity) {
  const updatedCart = [...cart.value]
  if (newQuantity <= 0) {
    updatedCart.splice(index, 1)
  } else {
    updatedCart[index].quantity = newQuantity
  }
  updateCart(updatedCart)
  localStorage.setItem("cart", JSON.stringify(updatedCart))
}

function removeFromCart(index) {
  const updatedCart = [...cart.value]
  updatedCart.splice(index, 1)
  updateCart(updatedCart)
  localStorage.setItem("cart", JSON.stringify(updatedCart))
}

function nextStep() {
  if (cart.value.length > 0 && step.value < 3) {
    step.value++
  }
}

function prevStep() {
  if (step.value > 1) {
    step.value--
  }
}

function validateForm() {
  const form = orderForm.value
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  errors.value = {}
  let isValid = true

  if (!/\S+@\S+\.\S+/.test(user.value.email)) {
    errors.value.email = "請輸入有效的電子郵件"
    isValid = false
  }

  if (!/^09\d{8}$/.test(user.value.phone)) {
    errors.value.phone = "請輸入有效手機號碼（09開頭，10碼）"
    isValid = false
  }

  if (isValid) {
    nextStep()
  }
}

function resetOrder() {
  step.value = 1
  user.value = { email: "", name: "", address: "", phone: "", note: "" }
  updateCart([])
  localStorage.removeItem("cart")
  router.push("/menu")
}

function generateOrderNumber() {
  const timestamp = Date.now()
  const randomPart = Math.floor(1000 + Math.random() * 9000)
  return `BBS-${timestamp}-${randomPart}`
}

function orderestablish() {
  order.value = {
    orderNumber: generateOrderNumber(),
    user: { ...user.value },
    cart: [...cart.value],
    totalPrice: totalPrice.value,
    createdAt: new Date().toISOString(),
  }
  nextStep()
}
</script>
