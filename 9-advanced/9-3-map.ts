namespace Union {
  type Video = {
    title: string;
    author: string;
  };

  // π©
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  /**
   * - map νμμ νμ©νλ©΄, κΈ°μ‘΄μ νμμ λ€λ₯Έ ννλ‘ λ³νν  μ μλ€.
   */
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'ellie';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'gunwoo',
  };
  // video.author = 'minji'; // error

  type Nullable<T> = { [P in keyof T]: T[P] | null }; // null μ΄ κ°λ₯νλλ‘ νλ νμ
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  /**
   * κ³΅μ λ¬Έμμμ λ³΅μ¬ν μ½λ
   * - μ΄λ κ² ProxifyλΌλ νμμ μ λ¬λμ μ΄λ€ μ€λΈμ νΈλ₯Ό λΉκΈλΉκΈ λλ©΄μ
   * - νμμ μ΄λ κ² ProxyλΌλ νμμΌλ‘ ν λ¨κ³ κ°μΈλ μ­ν μ ν΄μ€λ€.
   */
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
