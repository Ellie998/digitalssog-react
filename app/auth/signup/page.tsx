'use client';
import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { Separator } from '@/components/ui/separator';
import Postit from '../_components/postit';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { supabase } from '@/lib/subabase/initSupabase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const schema = z.object({
  nickname: z.string().min(2, { message: '두글자 이상의 닉네임이 필요합니다.' }),
  email: z.string().email({ message: '유효하지 않은 이메일 형식입니다.' }),
  pw: z
    .string()
    .min(8, { message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.' })
    .regex(/(?=.*\d)(?=.*[a-z]).{8,}/, {
      message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.',
    }),
  re_pw: z.string().regex(/(?=.*\d)(?=.*[a-z]).{8,}/, {
    message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.',
  }),
});
const AuthPage = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    if (values.pw !== values.re_pw) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      setIsSubmit(true);

      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.pw,
        options: {
          emailRedirectTo: '/auth/signIn',
          data: {
            nickname: values.nickname,
          },
        },
      });
      if (error) {
        toast.error('에러가 발생했습니다.');
        return;
      }

      toast.success('가입이 완료되었습니다.');
      router.push('/auth/signIn');
      router.refresh();
    } catch (error) {
    } finally {
      setIsSubmit(false);
    }
  }
  return (
    <div className="flex items-center justify-center w-full h-full bg-slate-100">
      <div className=" w-96 max-sm:w-3/4">
        <Postit
          title={
            <CardHeader>
              <CardTitle>로그인</CardTitle>
            </CardHeader>
          }
          content={
            <>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="nickname"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel htmlFor="text">닉네임</FormLabel>
                          <FormControl>
                            <Input id="nickname" placeholder="닉네임" required={true} {...field} />
                          </FormControl>
                        </FormItem>

                        <FormMessage />
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel htmlFor="email">이메일</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              placeholder="example@domain.com"
                              required={true}
                              {...field}
                            />
                          </FormControl>
                        </FormItem>

                        <FormMessage />
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pw"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel htmlFor="pw">비밀번호</FormLabel>
                          <Input
                            id="pw"
                            type="password"
                            placeholder="password"
                            required={true}
                            onClick={() => {
                              setErrorMessage('');
                            }}
                            {...field}
                          />
                        </FormItem>
                        <FormMessage />
                      </>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="re_pw"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormLabel htmlFor="re_pw">비밀번호 재입력</FormLabel>
                          <Input
                            id="re_pw"
                            type="password"
                            placeholder="password"
                            required={true}
                            onClick={() => {
                              setErrorMessage('');
                            }}
                            {...field}
                          />
                        </FormItem>
                        <FormMessage />
                      </>
                    )}
                  />
                  {errorMessage && <div className="text-red-600 ">{errorMessage}</div>}
                  <Button type="submit" className="w-full" disabled={isSubmit}>
                    회원가입
                  </Button>
                </form>
              </Form>
              <div className="flex justify-around mt-8">
                <Link href={'/auth/forget'} className="cursor-pointer ">
                  비밀번호 찾기
                </Link>
                <Separator orientation="vertical" className="h-[24px]" />
                <Link href={'/auth/signIn'} className="cursor-pointer ">
                  로그인
                </Link>
              </div>
            </>
          }
        ></Postit>
      </div>
    </div>
  );
};
export default AuthPage;
