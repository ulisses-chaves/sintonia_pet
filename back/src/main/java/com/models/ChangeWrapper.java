package com.models;

public class ChangeWrapper
{
    private String email;
    private String rg;

    public ChangeWrapper() {
        this.email = new String();
        this.rg = new String();
    }

    public ChangeWrapper(String email, String rg) {
        this.email =  email;
        this.rg = rg;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



}