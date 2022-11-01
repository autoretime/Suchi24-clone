<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use App\Models\Order;
use App\Models\OrderItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use PhpParser\Node\Stmt\Foreach_;

class OrderController extends Controller
{
    
    public function index(Request $request)
    {

       $order = new Order();
       $order->user_email = $request->userData['email'];
       $order->user_phone = $request->userData['Phone'];

       $order->total_sum = array_reduce($request->cartItems, function ($carry, $item){
            return $carry += $item['price'] * $item['amount'];
            });
    
        $order->save();
    
        Foreach($request->cartItems as $item){
            $orderItem = new OrderItems();
            $orderItem->order_id = $order->id;
            $orderItem->product_id = $item['id'];
            $orderItem->product_name = $item['name'];
            $orderItem->product_price = $item['price'];
            $orderItem->product_amount = $item['amount'];
            $orderItem->save();
        }

        //Mail
        Mail::to('artlevchenko2@gmail.com')->send(new OrderShipped($order));



        return response()->json(['order_id' => $order->id]);
    }

}
