<template>
    <el-form
      style="position:absolute;left: 45%;"
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
      @validate="handleValidate"
    >
      <el-form-item
        label="用户名"
        prop="name"
      >
        <el-input
          v-model="form.name"
          size="small"
          @blur="validateField('name')" 
        ></el-input>
      </el-form-item>
  
      <el-form-item
        label="密码"
        prop="pwd"
      >
        <el-input
          v-model="form.pwd"
          @blur="validateField('pwd')" 
        ></el-input>
      </el-form-item>
  
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
  
      <!-- 显示错误信息的区域 -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </el-form>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const formRef = ref(null);
  // 表单数据对象
  const form = reactive({
    name: '',
    pwd: ''
  });
  
  // 表单校验规则
  const rules = reactive({
    name: [
      { required: true, message: '用户名不能为空', trigger: 'blur' }
    ],
    pwd: [
      { required: true, message: '密码不能为空', trigger: 'blur' },
      { min: 10, max: 15, message: '密码长度必须在10到15个字符之间', trigger: 'input' }
    ]
  });
  
  // 错误信息
  const errorMessage = ref('');
  
  // 处理 validate 事件
  const handleValidate = (valid, fields) => {
    if (!valid) {
      // 找到第一个错误的信息并显示
      for (const field of fields) {
        if (field.errors.length > 0) {
          errorMessage.value = field.errors[0].message;
          break;
        }
      }
    } else {
      errorMessage.value = '';
    }
  };
  
  // 手动触发字段验证
  const validateField = (field) => {
    formRef.value.validateField(field, (valid) => {
      if (!valid) {
        errorMessage.value = formRef.value.fields[field].errors[0].message;
      } else {
        errorMessage.value = '';
      }
    });
  };
  
  // 登录按钮点击事件
  const loading = ref(false);
  const onSubmit = async () => {
    try {
      await formRef.value.validate(valid => {
        if (valid) {
          loading.value = true;
          // 在这里添加提交表单的逻辑
          console.log('表单提交成功');
        } else {
          console.log('表单校验失败，请检查必填项和密码长度');
          return false;
        }
      });
    } catch (error) {
      console.error('表单提交错误:', error);
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style scoped>
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  