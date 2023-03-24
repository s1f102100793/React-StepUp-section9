export const Practice3 = () => {
    const getTotalFee = (num: number): number => {
      // 関数の引数に型を指定するといい
      const total = num * 1.1;
      return total.toString();
    };
    const onClickPractice = () => {
      let total: number = 0;
      // 変数にも型を指定することで安全なアプリケーション開発ができる
      total = getTotalFee(1000);
      console.log(total);
    };
    return (
      <div>
        <p>練習問題:変数の型指定</p>
        <button onClick={onClickPractice}>練習問題3を実行</button>
      </div>
    );
  };
  