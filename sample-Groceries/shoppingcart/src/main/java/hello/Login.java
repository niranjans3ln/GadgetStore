package hello;

public class Login {

    private long id;
    private String loginId;
    private String password;

    public Login(long id, String loginId, String password) {
        this.id = id;
        this.loginId = loginId;
        this.password = password;
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLoginId() {
		return loginId;
	}

	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "Login [id=" + id + ", loginId=" + loginId + ", password="
				+ password + ", getId()=" + getId() + ", getLoginId()="
				+ getLoginId() + ", getPassword()=" + getPassword()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

    
}
