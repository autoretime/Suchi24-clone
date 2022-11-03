<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function authentificate(Request $request)
    {
        $data = $request->validate([
            'email'=> 'required|email',
            'password'=>'required',
        ]);

        if(Auth::attempt($data)){
            $request->session()->regenerate();
            return response()->json(Auth::user());            
        }

        return response()->json([
            'errors' => 'User not found'
        ]);

    }

    public function registration(Request $request)
    {
        $rules = [
            'name'=>'required',
            'email'=>'required|unique:users',
            'password'=>'required'
        ];

        $input =$request->only('name', 'email', 'password');

        $validator = Validator::make($input, $rules);

        if($validator->fails()){
            return response()->json(['success'=>false, 'errors'=>$validator->messages()]);
        }

        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),

        ]);
        return response()->json(['success'=>true]);
    }

    public function logout(Request $request)
    {
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json('Logout success');
    }

    
}
